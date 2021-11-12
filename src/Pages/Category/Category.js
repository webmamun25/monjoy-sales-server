
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
const Category = ({category}) => {
    
   
    return (

     

      <Card sx={{ maxWidth: 345,marginLeft:"270px",marginBottom:20,marginRight:"30px" }}>

      <CardMedia
        component="img"
        height="140"
        image={category?.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {category?.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category?.description.slice(0,100)}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          ${category?.price}
        </Typography>
      </CardContent>
      <CardActions>
      
        
      <Link to={`/order/${category?._id}`}>

<Button size="small" color="primary"   >
    Order Now
  </Button>
</Link>
      </CardActions>
      </Card>


     


        
    
    );
};

export default Category;