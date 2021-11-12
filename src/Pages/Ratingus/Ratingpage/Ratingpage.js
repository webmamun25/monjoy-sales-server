import { Avatar, Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Ratingpage = () => {
    const [information,setInformation] = useState([])
    useEffect(()=>{
        fetch('http://localhost:13000/found')
        .then(res=>res.json())
        .then(data=>setInformation(data))
    },[])
    console.log(information);
    return (
        <div  style={{marginLeft:300,marginBottom:300}}>
           <h2 style={{textAlign:'center'}}>Rating Us</h2>
           <Grid container spacing={2}>
           {
               information.map(data=>(
                <Grid item xs={4} md={4}>
                
                <Card sx={{ maxWidth: 345 }}>
                <Avatar sx={{marginLeft:20}} alt="Remy Sharp" src={data.photoURL} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.email}
        </Typography>
        <Typography variant="body2"  color="text.secondary">
          {data.feedback}
        </Typography>
        <Rating name="read-only" value={data.Givenvalue} readOnly />
      </CardContent>
      
    </Card>
                </Grid>
  
               ))
           }
</Grid>
           
           
          
          
       
            
        </div>
    );
};

export default Ratingpage;