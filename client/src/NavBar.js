import React from "react";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Box, Heading, Flex, Text, Button, MenuList } from "@chakra-ui/react";

function NavBar(props){
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);
    const navigate = useNavigate();
    const token = localStorage.getItem('jwt');
  
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="teal.500"
        color="white"
        {...props}
      >
        {token && <>
  
          <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Team 10 Budget Management App
          </Heading>
        </Flex>
  
        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
  
        <Box
          display={{ sm: show ? "block" : "none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          {/* <MenuItems onClick={()=>{alert("hello")}}>Home</MenuItems>
          <MenuItems to="/residents">Residents</MenuItems>
          <MenuItems onClick={() => alert('Kagebunshin')}>Bookings1</MenuItems>
          <MenuItems onClick={() => alert('Kagebunshin')}>Slots</MenuItems> */}
        </Box>
  
        <Box
          display={{ sm: show ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <Button bg="transparent" border="0px" onClick={()=>{navigate('/')}}>
          Home
          </Button>
          <Button bg="transparent" border="0px"  onClick={()=>{navigate('/projects')}}>
          Projects
          </Button>
          <Button bg="transparent" border="0px"  onClick={()=>{navigate('/addExpense')}}>
            Add Expense 
          </Button>
          <Button bg="transparent" border="1px" ml={3} onClick={()=>{
            localStorage.clear();
            navigate('/home')
            window.location.reload()
          }
            }>
          Logout
          </Button>
        </Box>
        
        
        </>}
        
      </Flex>
    );
  };

export default NavBar;

