/* import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {getAllCities, addData, deleteCity, modifyCity, getASpecificCityByItsId} from './ApiCalls'

export default function FromMyApi(){
const [cities, setCities] = useState()
const [reload, setReload] = useState(false)
const [modid, setModId]= useState()
const [id, setIds]=useState()

function deleteCityF(id){
    deleteCity(id)
    setReload(!reload)
}
const modifyDB = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    
    var dataInput ={
        nombre: data.get('Ciudad'),
        pais: data.get('Pais'),
        descripcion:data.get('Descripcion')
    };
    
    modifyCity(modid, dataInput)
    setReload(!reload)
console.log(dataInput)
};

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log(data)
    var dataInput ={
        nombre: data.get('Ciudad'),
        pais: data.get('Pais'),
        descripcion:data.get('Descripcion'),
        name: data.get('name')
    };
    
    addData(dataInput)
    setReload(!reload)

};

useEffect(()=>{
getAllCities()
.then(response=>setCities(response.data.response.cities))
getASpecificCityByItsId()
.then(response=> setIds(response.data.response.id))

},[reload])
console.log(id)
    return(
<div>
<p>{id}</p>
<div>
{cities?.map(city=>
 <ul>
  <li>{city.nombre}, {city.pais}, {city.descripcion} 
  <div>
  <div><button onClick={()=>deleteCityF(city._id)}>DELETE</button></div>
  <div><button onClick={()=>setModId(city._id)}>Modify</button></div>
  </div>
  </li>
</ul>
 

)}

     
</div>
<div>
<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}><TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  autoFocus
                /></Box>
                <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SEND DATA
            </Button>
    <h1>POST DATA CITIES</h1>

   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Ciudad"
                  name="Ciudad"
                  required
                  fullWidth
                  id="Ciudad"
                  label="Ciudad"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Pais"
                  label="Pais"
                  name="Pais"
                  autoComplete="Pais"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Descripcion"
                  label="Descripcion"
                  name="Descripcion"
                  autoComplete="Descripcion"
                />
              </Grid>
             
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SEND DATA
            </Button>
           
          </Box>
        </Box>
       
      </Container>
   
</div>
<div>
    <h1>MODIFICAR DATOS DESDE FRONT END EN DB</h1>

   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Box component="form" noValidate onSubmit={modifyDB} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Ciudad"
                  name="Ciudad"
                  required
                  fullWidth
                  id="Ciudad"
                  label="Ciudad"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Pais"
                  label="Pais"
                  name="Pais"
                  autoComplete="Pais"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Descripcion"
                  label="Descripcion"
                  name="Descripcion"
                  autoComplete="Descripcion"
                />
              </Grid>
             
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SEND DATA
            </Button>
           
          </Box>
        </Box>
       
      </Container>
   
</div>
</div>
    )
}


 */