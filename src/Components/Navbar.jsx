import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Outlet } from 'react-router-dom'

const Navbar = () => {
   
  

  
   
    



    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
    const list = (anchor) => (
        <>
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 210 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          mt={8}
        >
            <Link to = '/adduser' style={{textDecoration:'none'}}  >
          <List>
            
              <ListItem>
                
                <ListItemButton  >
                  <ListItemIcon>
                    <PersonAddIcon/>  
                  </ListItemIcon>
                  <ListItemText primary='Add User' />
                </ListItemButton>
               
              </ListItem>
          
          </List>
          </Link>
          <Divider />
         
            
        </Box>
        </>
      );
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    
    <AppBar position="static">
      <Toolbar>
       
          
          {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton  size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }} onClick={toggleDrawer(anchor, true)}><MenuIcon/></IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
        
       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Users List
        </Typography>
      </Toolbar>
    </AppBar>
    <Box m={5}>
   <Outlet/>
    
  </Box>
  </Box>
  
    </>
  )
}

export default Navbar