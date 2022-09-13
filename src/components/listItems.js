import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Link from '@mui/material/Link';

export const mainListItems = (
  <React.Fragment>
     <Link href="/signup">
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
     
      <Link href="/signup" >
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon  />
          </ListItemIcon>
          <ListItemText primary="Create Post" />
        </ListItemButton>
      </Link>

  
 
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
     <Link href="/signup" >
     <ListSubheader component="div" inset>
     Logout
    </ListSubheader>
     </Link>
   
   
  </React.Fragment>
);
