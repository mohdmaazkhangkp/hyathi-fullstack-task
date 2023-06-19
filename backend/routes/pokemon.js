import express from 'express';
import { adopt, allPokemon } from '../controllers/pokemon.js';
import { isAuthenticated } from '../middlewares/auth.js';


const router = express.Router();

router.get("/all", isAuthenticated, allPokemon);
router.post("/adopt", isAuthenticated, adopt);
router.get("/adopted");

export default router;