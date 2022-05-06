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

function ExpensesTable(props) {
    const navigate = useNavigate();
    async function handleDelete(data){
        console.log(data)
        axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/expenses/delete2`,
        {id:data.id}


        )
        .then((response) => {
          console.log(response.data)
        //   setProjectData(response.data)
         
        })
        .catch((err) => {

            alert("Error")
        })}

    


    const data = React.useMemo(
        () => [
            {
                "_id": "627494e853da3ab5227c3803",
                "id": 1,
                "name": "RTF",
                "budget": 12000,
                "description": "Realtime Face Recogniton"
            }
        ],
        []
      )

      const columns = React.useMemo(
        () => [
          {
            Header: 'ID',
            accessor: 'id', // accessor is the "key" in the data
          },
          {
            Header: 'Project Name',
            accessor: 'name',
          },
          {
            Header: 'Budget',
            accessor: 'budget',
          },
          {
            Header: 'Description',
            accessor: 'description',
          },{
            Header: 'Action',
            Cell: ({ cell }) => (
                <button value="Delete Expense"
                onClick={()=>{
                    // navigate('/project/1')
                     console.log(cell.row.values)
                     handleDelete(cell.row.values)
                     window.location.reload()
                    
                }}
                >
                  Delete Expense
                </button>
              )
          },
        ],
        []
      )
      const tableData = props.data
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data:tableData })
    console.log(props)


  return (
  <>
    <Heading sx={{pl:10,pt:10, pb:10}}>All Expenses for this project</Heading>
    <Box sx={{m:15,maxWidth:"70%"}}>
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
 
    </Box>

  </>
  );
}

export default ExpensesTable;
