import React, { useState } from 'react'
import PrimarySearchAppBar from '../../components/header/Header'
import './HomePage.css';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

function HomePage() {
    const [headerToggle, setHeaderToggle] = useState(false)
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    }
    const listenToHeader = () =>
    {
       setHeaderToggle(!headerToggle)
    }

  return (
    
    <div>
 <PrimarySearchAppBar listenToHeader ={listenToHeader}/> 
 <span><h3 className='home-books'>Books</h3></span>
 <List
      sx={{ width: '80%', maxWidth: 250, bgcolor: 'background.paper',marginLeft:'990px', marginTop:'-55px' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        
        </ListSubheader>
      }
    >
 <ListItemButton onClick={handleClick}>
        <ListItemIcon>
    
        </ListItemIcon>
        <ListItemText primary="Sort By relevance" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Sort By relevance" />
          </ListItemButton>
          </List>
      </Collapse>
    </List>
    </div>
  )
}

export default HomePage