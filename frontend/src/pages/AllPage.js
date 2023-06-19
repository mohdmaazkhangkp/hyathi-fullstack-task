import { Container, Grid } from '@mui/material';
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
    // <div>
    //   {allPokemon.map((p) => (
    //     <PokemonCard key={p.name} {...p} />
    //   ))}
    // </div>

    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {allPokemon.map((p) => (
          <PokemonCard key={p.name} {...p} adopted={false} />
        ))}
      </Grid>
    </Container>

  );

}

export default AllPage