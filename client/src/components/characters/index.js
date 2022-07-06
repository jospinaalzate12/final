import { useEffect, useState } from 'react';
import { getAllCharacters } from '../../services/api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';

import { Grid } from '@mui/material';

export default function RickCharacter() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        getAllCharacters()
            .then(arrayCharacters => {

                console.log(arrayCharacters);
                setCharacters(arrayCharacters);

            }).catch(error => {
                console.log(error);
            })

    }, []);

    return (
       <Card sx={{backgroundColor:'black',color:'white'}}>
        <Typography sx={{textAlign:'center'}}
        component='h3'
        variant='h3'>
          All characters  
        </Typography>
        
        <Grid component='ul' sx={{display:'grid',justifyContent:'center'}}>
       
       {characters.map((element)=>{
        return(
            <Card
            component='li'
             sx={{maxWidth:300, backgroundColor:'black',color:'white'}} key={element.name}>
                <CardMedia 

                component="img"
                 width="100"
                  image={element.image}></CardMedia>
                <CardContent>
                   <Typography
                   variant='h5'
                   component='h5'
                   >
                    {element.name} </Typography> 
                </CardContent>
                
                
            </Card>
        )
       })}
       </Grid>
       </Card>
    )

}

