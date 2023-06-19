import express from 'express';
import { adopt, allPokemon, getMyPokemon } from '../controllers/pokemon.js';
import { isAuthenticated } from '../middlewares/auth.js';


const router = express.Router();

router.get("/all", isAuthenticated, allPokemon);
router.post("/adopt", isAuthenticated, adopt);
router.get("/my", isAuthenticated, getMyPokemon);

export default router;