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


import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const {user,loginUser,isLoading,authError,signinwithGoogle}=useAuth()
  
  const location = useLocation()
  const history = useHistory()

  
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const loginhandler=e=>{
    e.preventDefault()
    
      loginUser(values.email,values.password,history,location)
      
      
      
  }
  const handleGoogle = ()=>{
    signinwithGoogle(location,history)
  }
  const handleChange = (prop) => (event) => {
    
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container >
      <Grid container >
        <Grid item xs={12} sx={{ mt:8}} md={6}>
        <Typography variant="body1" sx={{textAlign:"center"}} gutterBottom>
          Login 
        </Typography>
        <form action="" style={{marginTop:"50px"}} onSubmit={loginhandler}>
           <TextField sx={{width:1,m:1}} id="standard-basic" label="Your Email" name="email" onChange={handleChange('email')} variant="standard" />

           <FormControl sx={{ width:1,m:1}}  variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            name="password"
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
              
            <Button sx={{width:"100%",mt:4}}  type="submit" variant="contained">Login</Button>
        
            <NavLink style={{textDecoration:'none'}} to='/Register'> 
                <Button>New user ?Pleaser Register</Button>
              </NavLink>
              {isLoading && <CircularProgress sx={{textAlign:"center"}}></CircularProgress>}
          
          {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>}
          {authError && <Alert severity="error">{authError} — check it out!</Alert>}
        </form>
        <p>-------------------Google Sign In-----------</p>
        <Button sx={{width:"100%",mt:4}} onClick={handleGoogle} type="submit" variant="contained">Login</Button>
        
        
        </Grid>
       
      </Grid>
    </Container>
  )
}

export default Login
