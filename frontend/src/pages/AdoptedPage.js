import React, { useEffect, useState } from 'react'
import axios from "axios";
import { server } from '..';
import toast from 'react-hot-toast';
import { Container, Grid } from '@mui/material';
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
    <Container sx={{ py: 8 }} maxWidth="md">
      
      <Grid container spacing={4}>
        {pokemon.map((p) => (
          <PokemonCard key={p.name} {...p} adopted={false} />
        ))}
      </Grid>
    </Container>
  )
}

export default AdoptedPage