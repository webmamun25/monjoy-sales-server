import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Menubar from '../../Shared/Menubar';
import Category from '../Category/Category';

const Explore = () => {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        fetch('https://obscure-harbor-64328.herokuapp.com/categories')
        .then(res=>res.json())
        .then(data=>setCategory(data))

    },[])
    
    return (
        <>
            <Menubar></Menubar>
            <Grid container spacing={2}>
            {
                category.map(items=>(
                    <Grid  key={items._id} sx={{marginLeft:100 ,padding:5}}  xs={4} md={10} >
                    <Card sx={{ maxWidth: 445 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={items.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {items.Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {items.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      <Link to={`/order/${items._id}`}>

      <Button size="small" color="primary"   >
          Order Now
        </Button>
      </Link>
        
      </CardActions>
    </Card>
                    </Grid>
                    
                ))
            }
            
            
            </Grid>
            <Footer></Footer>
           </>     
           
        
    );
};

export default Explore;