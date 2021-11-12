
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { pink } from '@mui/material/colors';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PaymentIcon from '@mui/icons-material/Payment';
import HomeIcon from '@mui/icons-material/Home';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LoginIcon from '@mui/icons-material/Login';
import { Button, Collapse, ListItemButton} from '@mui/material';
import {NavLink} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
const drawerWidth = 240;




const Menubar = (props) => {
    const { window } = props;
    const [open, setOpen] = React.useState(true);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, logout } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  
  const list = ['Home', 'Advice', 'Explore','Dashboard', 'Myorders','Pay', 'Login','Logout',"Rating"]
  const drawer = (
    <div>


      <Toolbar />
      <Divider />
      <List>
      {
          <ListItem button key={list[0]}>
            <ListItemIcon>
             <HomeIcon></HomeIcon>
            </ListItemIcon>
            <ListItemText > 
            <NavLink
                    to="/"
                    style={isActive => ({
                      color: isActive ? "green" : "blue",
                      textDecoration:"none"
                      
                    })}
                  >
                  <Button > {list[0]} </Button> 
            </NavLink>    
            </ListItemText>
          </ListItem>
        }
      {
          <ListItem button key={list[1]}>
            <ListItemIcon>
             <ChromeReaderModeIcon></ChromeReaderModeIcon>
            </ListItemIcon>
            <ListItemText > 
            <NavLink
                    to="/Advice"
                    style={isActive => ({
                      color: isActive ? "green" : "blue",
                      textDecoration:"none"
                      
                    })}
                  >
                  <Button > {list[1]} </Button> 
            </NavLink>    
            </ListItemText>
          </ListItem>
        }
      {
          <ListItem button key={list[2]}>
            <ListItemIcon>
             <AutoAwesomeIcon></AutoAwesomeIcon>
            </ListItemIcon>
            <ListItemText > 
            <NavLink
                    to="/Explore"
                    style={isActive => ({
                      color: isActive ? "green" : "blue",
                      textDecoration:"none"
                      
                    })}
                  >
                  <Button > {list[2]} </Button> 
            </NavLink>    
            </ListItemText>
          </ListItem>
        }
      
      
        {
          user.email ? 
          <Box>
          <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          < PersonIcon/>
        </ListItemIcon> 
        <ListItemText primary={list[3]} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>

            <NavLink
                    to="/dashboard"
                    style={isActive => ({
                      color: isActive ? "green" : "blue",
                      textDecoration:"none"
                      
                    })}
                  >
            <ListItemText primary={list[4]} />
            </NavLink> 
          </ListItemButton>


        
          <ListItem button sx={{ pl: 4 }}  key={list[5]}>
            <ListItemIcon>
            <PaymentIcon></PaymentIcon>
            </ListItemIcon>
            <ListItemText > 
            <NavLink
                    to="/pay"
                    style={isActive => ({
                      color: isActive ? "green" : "blue",
                      textDecoration:"none"
                      
                    })}
                  >
                  <Button > {list[5]} </Button> 
            </NavLink>    
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ pl: 4 }}  key={list[8]}>
            <ListItemIcon>
             <ThumbsUpDownIcon></ThumbsUpDownIcon>
            </ListItemIcon>
            <ListItemText > 
            <NavLink
                    to="/rating"
                    style={isActive => ({
                      color: isActive ? "green" : "blue",
                      textDecoration:"none"
                      
                    })}
                  >
                  <Button > {list[8]} </Button> 
            </NavLink>    
            </ListItemText>
          </ListItem>
        
     

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <Button onClick={logout} color="inherit">Logout</Button>
          </ListItemButton>
        </List>
      </Collapse>

          </Box>
          :
          <ListItem button key={list[4]}>
            <ListItemIcon>
            <LoginIcon></LoginIcon>
            </ListItemIcon>
            <ListItemText > 
            <NavLink
                    to="/login"
                    style={isActive => ({
                      color: isActive ? "green" : "blue",
                      textDecoration:"none"
                      
                    })}
                  >
                  <Button > {list[4]} </Button> 
            </NavLink>    
            </ListItemText>
          </ListItem>


        }
        
    </List>
     
      
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
           
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              MONJOY
            </Typography>
           
            
            
            
          </Toolbar>
          
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth } , flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              height: 'calc(100% - 64px)', top: 64
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              height: 'calc(100% - 64px)', top: 64
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },height: 'calc(100% - 1200px)', top: 1200 }}
            
        >
          <Toolbar />
         
        </Box>
      </Box>
    );
};
Menubar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

export default Menubar;