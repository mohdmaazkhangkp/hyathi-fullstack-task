import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import express from 'express';
import userRouter from "./routes/user.js"
import cors from "cors"

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


// using routes
app.get("/", (req,res)=>{
    res.send("Home")
})
