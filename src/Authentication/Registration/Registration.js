import React from 'react';
import {
  Alert,
    Button,
    CircularProgress,
    Container,
    FormControl,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
    
  } from '@mui/material';
  import Visibility from '@mui/icons-material/Visibility';
  import VisibilityOff from '@mui/icons-material/VisibilityOff';
  
  
  import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const {user,registerUser,isLoading}=useAuth()
  const history = useHistory(); 
  const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
 
      
    const [newPass, setPass] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      const loginhandler=e=>{
        e.preventDefault()
        if(values.password !== newPass.password){
          alert("Your Password doesnot match")
          return
        }

        registerUser(values.email,values.password,values.name,history)
        setValues({})
        setPass({})
        history.push('/login',{from:"Register"})
        
      }
      const handleChange = (prop) => (event) => {
        console.log(event.props)
        setValues({ ...values, [prop]: event.target.value });
      };
      const handlePas = (prop) => (event) => {
        console.log(event.props)
        setPass({ ...values, [prop]: event.target.value });
      };
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
        
      };
      const handleClickShow =()=>{
        setPass({
            ...newPass,
            showPassword: !newPass.showPassword,
          });
      }
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const handleMouseDown =(event)=>{
          event.preventDefault();
      }
    return (
        <Container >
        <Grid container >
          <Grid item xs={12} sx={{ mt:8}} md={6}>
          <Typography variant="body1" sx={{textAlign:"center"}} gutterBottom>
            Registrtion Form
          </Typography>
          {!isLoading && <form action="" style={{marginTop:"50px"}} onSubmit={loginhandler}>
             <TextField sx={{width:1,m:1}} id="standard-basic" label="Your Name" type="text" name="name" onChange={handleChange('name')} variant="standard" />
             <TextField sx={{width:1,m:1}} id="standard-basic" label="Your Email" type="email" name="email" onChange={handleChange('email')} variant="standard" />
  
             <FormControl sx={{ width:1,m:1}}  variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
             <FormControl sx={{ width:1,m:1}}  variant="standard">
            <InputLabel htmlFor="standard-adornment-password2">Confirm Password</InputLabel>
            <Input
              id="standard-adornment-password2"
              type={newPass.showPassword ? 'text' : 'password'}
              value={newPass.password}
              onChange={handlePas('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShow}
                    onMouseDown={handleMouseDown}
                  >
                    {newPass.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
                
              <Button sx={{width:"100%",mt:4}}  type="submit" variant="contained">Register</Button>
          
              <NavLink style={{textDecoration:'none'}} to='/login'> 
                  <Button>Already Registered ?Pleaser Login</Button>
                </NavLink>
          </form>}
          {isLoading && <CircularProgress sx={{textAlign:"center"}}></CircularProgress>}
          
         
         
          </Grid>
          <Grid sx={{width:"100%"}} item xs={12} md={6}>
            {/* <img src={login}  alt="" /> */}
          </Grid>
        </Grid>
      </Container>
    );
};

export default Register;