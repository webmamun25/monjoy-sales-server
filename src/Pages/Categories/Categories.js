import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Category.css'
const Categories = () => {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        fetch('https://obscure-harbor-64328.herokuapp.com/categories')
        .then(res=>res.json())
        .then(data=>setCategory(data))

    },[])
    const sixitems = category.slice(0,6)
    return (
        <>
        <h1>
        <Typography gutterBottom variant="h5" sx={{backgroundColor:"rgba(149, 80, 115, 0.8)",color:"white"}}  >
                      <h1 style={{marginLeft:"800px"}}>
                      LATEST BICYCLE
                      </h1>  
        </Typography>
        </h1>
             
        
            <Grid container spacing={2} sx={{backgroundColor: "cornflowerblue"}}>
           
            {
                sixitems.map(items=>(
        
                <Grid item xs={8}  md={4} >
                               
                        <Category key={items._id} category={items}></Category>
                </Grid>

       
                    
                    
                ))
            }
            
            
            </Grid>
                
      </>     
        
    );
};

export default Categories;