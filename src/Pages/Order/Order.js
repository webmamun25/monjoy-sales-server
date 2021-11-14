import { Grid, ImageListItem, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { height } from '@mui/system';
import Menubar from '../../Shared/Menubar';
import useAuth from '../../hooks/useAuth';
const Order = () => {
    const {user} = useAuth()
    const { register, handleSubmit } = useForm();
    const location = useHistory()
    const {itemid} =useParams()
    const[details,setDetails] = useState([])
    
    useEffect(()=>{
        fetch('https://obscure-harbor-64328.herokuapp.com/categories')
        .then(res=>res.json())
        .then(data=>setDetails(data))

    },[setDetails])



       const itemdetails = details.find((detail) => detail._id === itemid)
           
       const onSubmit = (result,e) => {
        const item = {result,itemdetails}
        fetch("https://obscure-harbor-64328.herokuapp.com/orderone",{
            method:"POST",
            headers:{
              "content-type":"application/json"
      
            },
            body:JSON.stringify(item)
          })
          .then(res=>res.json())
          .then(data=>{
              if(data.insertedId){
                  location.push("/dashboard")
              }
          })
    };
    console.log(itemdetails);

    return (
        <>
        <Menubar></Menubar>

        <Grid  container spacing={2}>
            <Grid item xs={8} sx={{borderRight:1}}>
    
        <div className="itemset" style={{marginRight:20,padding:10}}>
        
        <ImageListItem >
           <img style={{width:"300px", height:"400px",marginLeft:"400px"}} src={itemdetails?.img} alt="" />
          
          </ImageListItem>
        <div>
        <Paper elevation={3} sx={{width:600,marginLeft:"400px",padding:2,textAlign:"justify"}} >

        <Typography sx={{ fontSize: 14,color:"green" }} color="text.secondary"  gutterBottom>
         
         <h4>Name:{itemdetails?.Name}</h4>
        
            <h4>Description:{itemdetails?.description}</h4>
         
         <h1> price:{itemdetails?.price}</h1> 
        </Typography>


        </Paper>
        </div>



        </div>


  </Grid>
  <Grid item xs={4}>
  <form style={{width:500,border:"1px solid red",height:500,marginTop:30}} onSubmit={handleSubmit(onSubmit)}>
      <input style={{width:"90%",padding:10 ,margin:10}} placeholder='Email' value={user.email} {...register("Email")} />
      <input style={{width:"90%",padding:10 ,margin:10}} value={itemdetails?.price} {...register("price")} />
      <input style={{width:"90%",padding:10 ,margin:10}} placeholder="ADDRESS" {...register("Address")} />
      
      <input style={{padding:10 ,margin:"10px 10px",background:"#EC5990",border:"none"}}  type="submit" />
    </form>
  </Grid>
  
</Grid>
</>
    );
};

export default Order;