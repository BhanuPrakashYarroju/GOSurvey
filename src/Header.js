import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';



const Header = () => {
    return (
     
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"elevation={0}>
        <Toolbar>
        <Button color="inherit" component={Link} to="/"><Typography variant="h5">GoSurvey</Typography></Button>
          <br/>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" component={Link} to="/Login">Login</Button>
          <Button color="inherit" component={Link} to="/Signin">Signup</Button>
          </Box>
        </Toolbar>
      </AppBar>
 </Box>
    )
}

export default Header