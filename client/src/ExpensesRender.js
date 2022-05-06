import React from "react";
import { useState, useEffect,useParams } from 'react'
import { useNavigate } from "react-router-dom";
import { forwardRef } from 'react';
import { Box, Heading, Flex, Text, Button, MenuList } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'
import MaterialTable from 'material-table'
import axios from 'axios';
import ProjectTable from "./ProjectTable";
import ExpensesTable from "./ExpensesTable";


function ExpensesRenderer(props) {
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState()
    // console.log("EXPENSE ID: " + this.props.match.params.id)
    // console.log(console.log(window.location.pathname))
    const projectid=window.location.pathname.substring(9)
    console.log(projectid)


    async function getProjects(){
        axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/expenses/get/`, 
        // {id:localStorage.getItem("id")}
        {project_id:projectid}

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
    <Heading sx={{pl:10,pt:10, pb:10}}>Expenses</Heading>
    <Box sx={{m:15,maxWidth:"70%"}}>
    {projectData && <ExpensesTable data={projectData}/>}
    </Box>

  </>
  );
}

export default ExpensesRenderer;
