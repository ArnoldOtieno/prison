import { AppBar, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import items from '../api/adminData'



const AdminPage = () => {
  const drawerWidth =220;
  const [selected,setSelected] = useState('')

  // rendering admin components
  const adminItem = () =>{
    const item = items.find((x) => x.id === selected);
    return item ? <>{item.component}</>:null
    
  }
  return (
    <Box>
      <AppBar position="absolute" sx={{ width: "100%",zIndex:1201,
      backgroundColor:'#101F33',
      color:'rgba(255,255,255,0.7)', }} >
        <Toolbar> <Typography variant="h6" noWrap component="div">Permanent drawer</Typography>
        </Toolbar>
      </AppBar>
      <Box>
      <Drawer sx={{
      width: drawerWidth,
      flexShrink: 0,'& .MuiDrawer-paper': {width: drawerWidth,boxSizing: 'border-box',backgroundColor:'#101F33',
      color:'rgba(255,255,255,0.7)',paddingTop:"70px",
      
      },
    }}
    variant="permanent"
    anchor="left"
  >

    <List>
      {items.map((item) => (
        <ListItem  key={item.id} disablePadding>
          <ListItemButton onClick={() => setSelected(item.id)}>
            {/* <ListItemIcon sx={{color:'rgba(255,255,255,0.7)'}}>{item.icon} </ListItemIcon> */}
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>
  <Box sx={{left:"250px",top:"100px",position:"relative"}}>
    {
      adminItem()
    }
</Box>
  

  </Box>

      </Box>
      
    
  )
}

export default AdminPage