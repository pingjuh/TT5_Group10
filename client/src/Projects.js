import React from "react";
import { useState, useEffect } from 'react'
import { forwardRef } from 'react';
import { Box, Heading, Flex, Text, Button, MenuList } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'
import MaterialTable from 'material-table'
import axios from 'axios';

function Projects() {

    async function getProjects(){
        axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/projects/allProjects`, {id:1}
        )
        .then((response) => {
          console.log(response.data)
         
        })
        .catch((err) => {

            alert("Error")
        })}

    

    useEffect(() => {
        getProjects()
    }, [])


//   useEffect(() => {
//     checkUser()
//   }, []);

  return (
  <>
    <Heading sx={{pl:10,pt:10, pb:10}}>Projects Page</Heading>
    <Box sx={{maxWidth:"70%"}}>
 
    </Box>

  </>
  );
}

export default Projects;
