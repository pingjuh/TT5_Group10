import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Flex, Text, Button, MenuList } from "@chakra-ui/react";
const Home = () => {
  const navigate = useNavigate();
return (
	<div>
	<Heading>Welcome to DBS</Heading>
	<nav>
        <ul>
          <li>
            {/*Link to the Sign In page*/}
            <Flex>
              <Button sx={{m:5}} colorScheme='teal' border="0px" onClick={()=>{navigate('/signin')}}>Sign in</Button>
              <Button sx={{m:5}} colorScheme='teal' border="0px" onClick={()=>{navigate('/register')}}>Register</Button>
            </Flex>
            
            
            {/* <Link to="/signin">Sign In</Link> */}
          </li>
          <li>
            {/*Link to the Register page*/}
            
            {/* <Link to="/register">Register</Link> */}
          </li>
        </ul>
      </nav>


	</div>
);
};

export default Home;
