import { useRef, useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom';
import { Box, Heading, Flex, Text, Button, MenuList, Input } from "@chakra-ui/react";
import axios from 'axios';

const SIGNIN_URL = '/signin'

const Signin = () => {
    // const { setAuth } = useContext();
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pw, setPw] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pw])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pw);
        setUser('');
        setPw('');
        

        const payload = {username: user, password: pw}

        axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, 
        payload
        )
        .then((response) => {
            console.log(response.data)
            localStorage.setItem('jwt', response.data.jwt)
            localStorage.setItem('name', response.data.users.name)
            localStorage.setItem('id', response.data.users.id)
            localStorage.setItem('appointment', response.data.users.appointment)
            setSuccess(true);
        })
        .catch((err) => {
            alert("Username or Password is incorrect, try again")
        });
        
    }

    return (
        <>
        {/* <h1>{pw}</h1> */}
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link to= "/home">Go to Home</Link>
                    </p>
                </section>
            ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <Box  sx={{m:5}}>
               <Heading>Sign In</Heading>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <Input 
                    sx={{mb:5}}
                    type ="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required 
                />

<label htmlFor="password">Password:</label>
                <Input 

                    type ="password"
                    id="password"
                    onChange={(e) => setPw(e.target.value)}
                    value={pw}
                    required 
                />

                <Button type="submit" sx={{mt:5}} colorScheme='teal'>Sign In</Button>
            </form>
            <p>
                        New User?<br />
                        <span className="line">
                                <Link to= "/register">Sign Up</Link>
                        </span>
                    </p>
            </Box>
        </section>
            )}
        </>
  )
}

export default Signin