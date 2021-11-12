import React from 'react';
import Grid from '@mui/material/Grid';
import './Banner.css'
import banner from '../images/banner.png'
import { Button } from '@mui/material';
const Banner = () => {
    return (
        <Grid container spacing={2} className="bannermain">

        <Grid item xs={8} md={6}>
        <div className="bannerimage">
            <img src={banner} alt="" />
        </div>
       
            </Grid>
            <Grid className="content" sx={{color:"white"}} item xs={4} md={6}>
              <h4 style={{fontSize:32 }}>  MONJOY IS ONLINE PLATFORM
               <br /> BUY BEST CYCLE FROM MONJOY <br /></h4>
                <p style={{fontSize:14 ,}}>Check out our new collection of bicycle 
            
                for Boys,Girls and Children
                </p>
                <Button variant="contained" sx={{backgroundColor:"yellow",color:"black",mt:5}}>Shop Now</Button>
            </Grid>
           
            
        </Grid>

        
    );
};

export default Banner;