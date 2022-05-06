import React from "react";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { forwardRef } from 'react';
import { Box, Heading, Flex, Text, Button, MenuList } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'
import MaterialTable from 'material-table'
import axios from 'axios';
import ProjectTable from "./ProjectTable";


function Projects() {
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState()

    async function getProjects(){
        axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/projects/allProjects`, 
        {id:localStorage.getItem("id")}
        // {id:"1"}

        )
        .then((response) => {
          console.log(response.data)
          setProjectData(response.data)
         
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
    <Box sx={{m:15,maxWidth:"70%"}}>
    {projectData && <ProjectTable data={projectData}/>}
 
    </Box>

  </>
  );
}

export default Projects;
