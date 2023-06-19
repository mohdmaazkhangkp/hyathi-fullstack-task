import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

const PokemonCard = ({ name, breed, age, healthStatus }) => {
    const [adopted, setAdopted] = useState(false);
    const clickHandler = ()=>{
        setAdopted(true)
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