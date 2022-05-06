import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Flex, Text, Button, MenuList } from "@chakra-ui/react";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ButtonGroup } from "@mui/material";

const theme = createTheme();

const Home = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Grid
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                variant:'contained'
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              </Avatar>
              <Typography component="h1" variant="h5">
                Welcome to DBS
              </Typography>
                <ButtonGroup sx={{ mt: 3, mb: 2 }} variant="contained">
                  <Button onClick={()=>{navigate('/signin')}}>Sign in</Button>
                </ButtonGroup>
                <ButtonGroup sx={{ mt: 1, mb: 2 }} variant="contained">
                <Button onClick={()=>{navigate('/register')}}>Register</Button>
                </ButtonGroup>  
            </Grid>
          </Grid>
      </Grid>
    </ThemeProvider>
    
    /* <div>
    <Heading>Welcome to DBS</Heading>
    <nav>
          <ul>
            <li> */
              /*Link to the Sign In page*/
              /* <Flex>
                <Button sx={{m:5}} colorScheme='teal' border="0px" onClick={()=>{navigate('/signin')}}>Sign in</Button>
                <Button sx={{m:5}} colorScheme='teal' border="0px" onClick={()=>{navigate('/register')}}>Register</Button>
              </Flex> */
              
              
              /* <Link to="/signin">Sign In</Link> */
            /* </li>
            <li> */
              /*Link to the Register page*/
              
              /* <Link to="/register">Register</Link> */
            /* </li>
          </ul>
        </nav>


      </div> */
    );
};

export default Home;
