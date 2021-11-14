import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const Makeadmin = () => {
    const [email,setEmail] = useState('')
    const handleAdmin=(e)=>{
        e.preventDefault()
        const user = {email}
        fetch('https://obscure-harbor-64328.herokuapp.com/users/admin',{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
               alert("create admin successfully")

            }
        })




    }
    const handleEmail=e=>{
        setEmail(e.target.value)
    }


    return (
        <div style={{position:"relative",left:"50%",top:"300px"}}>
        <h2 style={{marginBottom:"130px"}} >  Create An Admin</h2>
        <form  onSubmit={handleAdmin}>
        <TextField id="standard-basic"  label="Email"
            type="email"
            onBlur={handleEmail}
         variant="standard" />
         <br />
         <br />
        <Button  type="submit" variant="contained">Create Admin</Button>
        
        </form>
           
        </div>
    );
};

export default Makeadmin;