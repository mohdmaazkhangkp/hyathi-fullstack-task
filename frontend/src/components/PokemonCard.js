import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { server } from '..';

const PokemonCard = ({ name, breed, age, healthStatus }) => {
    const [adopted, setAdopted] = useState(false);
    const clickHandler = async()=>{
        setAdopted(true);
        try {
            
            const { data } = await axios.post(
                `${server}/pokemon/adopt`,
                {
                    name, breed, age, healthStatus 

                },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            toast.success(data.message);
            
        } catch (error) {
            toast.error(error.response.data.message);
            
        }
    }

  return (
      <Grid item xs={12} sm={6} md={4}>
          <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor:"#f2f7ff" }}
          >
              
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems:"center" }}>
                  <Typography gutterBottom variant="h5" component="h2">
                      {name}
                  </Typography>
                  <Typography>
                      Breed: {breed}
                      
                  </Typography>
                  <Typography>
                      age:{age}
                     
                  </Typography>
                  <Typography>
                      
                      healthStatus: {healthStatus}
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button disabled={adopted} onClick={clickHandler} variant="contained" size="medium" sx={{width:"100%"}}>Adopt</Button>
              </CardActions>
          </Card>
      </Grid>
  )
}

export default PokemonCard