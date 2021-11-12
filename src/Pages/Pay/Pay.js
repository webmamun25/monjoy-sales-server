import React from 'react';
import { Link } from 'react-router-dom';
import pay from '../../images/payment.jpg'
const Pay = () => {
    return (
        <div style={{width:"80%",margin:"0 auto"}}>
        <img style={{width:"60%" ,marginTop:"200px"}} src={pay} alt="" />
           <h1>Payment system coming soon.</h1> 
           
           <Link to="/"><button style={{padding:10,background:"cyan"}} >Home</button></Link>
           
           
        </div>
    );
};

export default Pay;