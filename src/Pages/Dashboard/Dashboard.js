import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Menubar from '../../Shared/Menubar';

const Dashboard = () => {
    const { user } = useAuth()
  const useremail = user.email
  const [allorder, setAllorder] = useState([])

  
  useEffect(() => {
    fetch(`https://obscure-harbor-64328.herokuapp.com/mydashboard/${useremail}`)
      .then((res) => res.json())
      .then((data) => setAllorder(data))
  }, [useremail])
  

  const handleDelete = (useremail, id) => {
    const agree = window.confirm('You take a risky decision')

    if (agree) {
      const url = `https://obscure-harbor-64328.herokuapp.com/myorders/${useremail}/${id}`

      fetch(url, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = allorder.filter((order) => order._id !== id)
            setAllorder(remaining)
          }
        })
    }
  }





  console.log(allorder);
    return (
       <Grid container spacing={2}>
        <Menubar></Menubar>
        

        <Grid item md={8} style={{marginLeft:"600px"}}>
      {allorder.map((orders) => (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={orders.itemdetails.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {orders.itemdetails.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {orders.itemdetails.description.slice(0,200)}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button onClick={() => handleDelete(orders.result.Email, orders._id)} size="small">Delete</Button>
      </CardActions>
    </Card>
      ))}
    </Grid>






        </Grid>
    )
    
      
};
      

export default Dashboard;