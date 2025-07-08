import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import { Home, Settings, ContactMail, People, Event, Notifications } from '@mui/icons-material';

// const drawerWidth = 100;

const SideNavbar = ({selectedEntity, setSelectedEntity}) => {
  const listItems = [
    { text: 'People', icon: <People />, onClick: () => setSelectedEntity('people') },
    { text: 'Hostels', icon: <Home />, onClick: () => setSelectedEntity('hostels') },
    { text: 'Events', icon: <Event />, onClick: () => setSelectedEntity('events') },
    { text: 'Notifications', icon: <Notifications />, onClick: () => setSelectedEntity('notifications') },
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: '15%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '15%', // 15% of the screen width
            boxSizing: 'border-box',
            // match color to the other pages
            backgroundColor: '#0096a0',
            color: '#fff',
          },
        }}
      >
        <Toolbar />
        {/* add hover animation on button */}
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {listItems && listItems.map((item, index) => (
                // vertical padding zero
              <ListItem key={item.text} sx={{ padding: '0px' }}>
                <ListItemButton onClick={item.onClick} sx={{'&:hover': { backgroundColor: '#007c85' }, width: '100%', padding: '10px 10px 10px 10px' }}>
                    <ListItemIcon sx={{ color: '#fff', paddingLeft: '10%' }}>
                      {item.icon}
                    </ListItemIcon>
                  {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}> */}
                    <ListItemText primary={item.text}/>
                  {/* </Box> */}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <Toolbar /> */}
        {/* <h1>Main Content Here</h1> */}
      {/* </Box> */}
    </Box>
  );
}

export default SideNavbar;