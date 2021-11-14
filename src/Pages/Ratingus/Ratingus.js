import { Alert, Avatar, Button, Rating, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

import StarsIcon from '@mui/icons-material/Stars';
const Ratingus = () => {
    const {user} =useAuth()
    const [Givenvalue, setGivenvalue] = React.useState(2);
    const history =useHistory()
  const initialInfo = {email:user.email,photoURL:user.photoURL}
  const [ratingvalue,setRatingvalue] = useState(initialInfo)
   
  
  const handlerating = (e) =>{
      e.preventDefault()
        const given={...ratingvalue,Givenvalue}
            
          fetch("https://obscure-harbor-64328.herokuapp.com/ratingus",{
            method:"POST",
            headers:{
              "content-type":"application/json"
      
            },
            body:JSON.stringify(given)
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.insertedId){
              <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
      
              </Stack>
              history.push('/')
            }
          })
        
    }
    const handleOnBlur = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...ratingvalue}
        newInfo[field]=value
        setRatingvalue(newInfo)
        
        
      }
    return (
        
        <div style={{width:"500px",marginLeft:700,marginTop:100}} >
        <Typography variant="h5" sx={{textAlign:"center",color:"goldenrod",marginBottom:10}}>HEY,PLEASE RATE US</Typography>
        <form onSubmit={handlerating} >
            
           
        <Avatar alt="Remy Sharp" sx={{marginLeft:25,marginBottom:4,padding:5}} src={user.photoURL} />  
            <TextField
              sx={{ width: '90%', m: 1 }}
              hiddenLabel
              name="email"
              onBlur={handleOnBlur }
              id="filled-hidden-label-small"
              defaultValue={user.email}
              variant="filled"
              size="small"
            />
             <TextField
                id="outlined-multiline-flexible"
                label="feedback"
                name="feedback"
                multiline
                maxRows={4}
                onBlur={handleOnBlur }
                sx={{ width: '90%', m: 1 }} 
       
        />  
        <br />
              <Rating
                  name="rating"
                  value={Givenvalue}
                  onChange={(event, newValue) => {
                    setGivenvalue(newValue);
                  }}
                />
            <br />
            <Button sx={{ mx: 3 }} type="submit" variant="contained">
              {' '}
              <StarsIcon></StarsIcon> THUMBS UP
            </Button>
          </form>

         
          </div>
     
    );
};

export default Ratingus;