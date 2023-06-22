import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { server } from '..';
import PokemonCard from '../components/PokemonCard';

const AllPage = () => {
 const [allPokemon, setAllPokemon] = useState([]);
  useEffect(()=>{
    getAllPoke();
  }, [])

  const getAllPoke= async()=>{
    try {
      const { data } = await axios.get(
        `${server}/pokemon/all`,
        
        {
          withCredentials: true,
        }
      );
      setAllPokemon(data.pokemon)
      
      
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
   

    <Container sx={{ py: 4 }} maxWidth="md">
      <Typography textAlign="center" gutterBottom variant="h4" component="h2"mb={4}>
        All Available Pokemon
      </Typography>
      
      {allPokemon.length > 0 ? <Grid container spacing={4}>
        {allPokemon.map((p) => (
          <PokemonCard key={p.name} {...p} isAllPage={true} />
        ))}

      </Grid>
        :
        <Typography textAlign="center" gutterBottom variant="body1" component="h5" mb={4}>
          All the Pokemon have been adapted
        </Typography>}
    </Container>

  );

}

export default AllPage