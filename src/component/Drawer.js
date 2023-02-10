import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const drawerWidth = 240;

export default function ClippedDrawer(props) {
  const Navigate = useNavigate()

  const DrawerArray = [
    {
      name : 'Our Product',
      icon : <DashboardIcon />,
      path : '/'
    },
    {
      name : 'Add Product',
      icon : <AddIcon />,
      path : '/AddProduct'
    }
  ]

  const OnclickUrl = (path) => {
    Navigate(path)
  }
  
  const OnclickLogin = () => {
    Navigate('/login')
  }
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , backgroundColor: '#fcc33c'}}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              My Health Medical Hospital
            </Typography>
            <Button color="inherit" onClick={OnclickLogin}>Login</Button>
          </Toolbar>
        </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {DrawerArray.map((i) => (
              <ListItem key={Math.random()} disablePadding onClick={() => OnclickUrl(i.path)}>
                <ListItemButton>
                  <ListItemIcon>
                    {i.icon}
                  </ListItemIcon>
                  <ListItemText primary={i.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', paddingTop: 10, paddingLeft: 2, paddingRight: 2 }}
      >
        {props.children}
      </Box>
    </Box>
  );
}