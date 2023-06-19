import React, { useEffect, useState } from 'react'
import axios from "axios";
import { server } from '..';
import toast from 'react-hot-toast';
import { Container, Grid, Typography } from '@mui/material';
import PokemonCard from '../components/PokemonCard';

const AdoptedPage = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get(`${server}/pokemon/my`, {
        withCredentials: true,
      })
      .then((res) => {
        
        setPokemon(res.data.adoptedPokemon);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }, []);
  return (
    <Container sx={{ py: 4 }} maxWidth="md">
      <Typography textAlign="center" gutterBottom variant="h4" component="h2" mb={4}>
        My Adopted Pokemon
      </Typography>
      {pokemon.length > 0 ? <Grid container spacing={4}>
         {pokemon.map((p) => (
          <PokemonCard key={p.name} {...p}  />
        ))} 
        
      </Grid>
        :
        <Typography textAlign="center" gutterBottom variant="body1" component="h5" mb={4}>
          You have not Adopted any Pokemon yet
        </Typography>}
    </Container>
  )
}

export default AdoptedPage