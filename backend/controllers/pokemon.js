import { dummyPokemonArray } from "../data/pokemonData.js"
import { Adopted } from "../models/adopted.js";

export const allPokemon = async (req, res) => {
    let availablePokemon = dummyPokemonArray;
    
    res.status(200)
        .json({
            success: true,
            pokemon: availablePokemon,
        })
}

export const adopt = async (req, res, next) => {
    try {
        const { name, breed, age, healthStatus } = req.body;

        await Adopted.create({
            name, breed, age, healthStatus, user: req.user,
        });

        res.status(201).json({
            success: true,
            message: "Adopted Successfully",
        });
    } catch (error) {
        
    }
};

export const getMyPokemon = async (req, res, next) => {
    try {
        const userid = req.user._id;

        const adoptedPokemon = await Adopted.find({ user: userid });

        res.status(200).json({
            success: true,
            adoptedPokemon,
        });
    } catch (error) {
       
    }
};