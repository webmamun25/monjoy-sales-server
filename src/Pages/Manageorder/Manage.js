import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
const Manage = () => {
    const[order,setOrder] =useState([])
    const handleapproved=(id)=>{
        const pending="Approved"
        const Pending ={pending,id}
        
        fetch('https://obscure-harbor-64328.herokuapp.com/manage',{
            method:"PUT",
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify(Pending)
        })
        .then(res=>res.json())
        .then(data=>window.location.reload())

    }
  
    useEffect(()=>{

        fetch("https://obscure-harbor-64328.herokuapp.com/manageall")
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    return (
        <div>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row) => (
            <TableRow
              key={row.itemdetails.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.itemdetails._id}
              </TableCell>
              <TableCell align="right">{row.itemdetails.Name}</TableCell>
              <TableCell align="right"> <Button  onClick={()=>handleapproved(row._id)}> {row.pending==="Approved" ? row.pending : "Pending" } </Button> </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Manage;