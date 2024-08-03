import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import express from 'express';
import userRouter from "./routes/user.js"
import pokemonRouter from "./routes/pokemon.js"
import cors from "cors"
import { Adopted } from './models/adopted.js';
import cron from 'node-cron'
export const app = express();

config({
    path: "./data/config.env",
});


// using middlewares
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/pokemon", pokemonRouter);

const checkFeedStatus = async ()=>{
    const adoptedPokemons = await Adopted.find();
 
    for (let adoptedPokemon of adoptedPokemons){
        const timeDifference = Math.abs(Date.now() - adoptedPokemon.createdAt); 
        if (timeDifference > 1000 * 60 && adoptedPokemon?.healthStatus>0 && adoptedPokemon?.healthStatus<100){
            await updatePokemonHealth(adoptedPokemon._id);
        } 
    }
}

const updatePokemonHealth = async (id) =>{
    const pokemonToUpdate = await Adopted.findById(id);
    pokemonToUpdate.healthStatus>=25 ? pokemonToUpdate.healthStatus -= 25 : pokemonToUpdate.healthStatus=0;
    
    await pokemonToUpdate.save();
}

cron.schedule('* * * * *', checkFeedStatus);

app.get("/", (req,res)=>{
    res.send("Home")
})
