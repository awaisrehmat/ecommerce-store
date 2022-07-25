import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import {Link} from "react-router-dom";

const linkStyle = {
    margin: "1rem",
   textDecoration: "none",
    color: 'white',
   
  };

const TopMenu = () => {
    return ( 
        <AppBar position='static'>

            <Toolbar>
                <Typography variant='h6'>
                    <Link to="/" style={linkStyle}>
                    Home
                    </Link>
                </Typography>

                <Typography variant='h6'>
                    <Link to="/products" style={linkStyle}>
                    Products
                    </Link>
                </Typography>

                <Typography variant='h6'>
                    <Link to="/contact-us" style={linkStyle}>
                    Contact Us
                    </Link>
                </Typography>
                
                
            </Toolbar>

        </AppBar>
     );
}
 
export default TopMenu;