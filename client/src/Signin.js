import { useRef, useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom';
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
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
            </form>
            
            <hi>Sign In</hi>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                    type ="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    placeholder="Enter your username"
                    required 
                />

<label htmlFor="password">Password:</label>
                <input 
                    type ="password"
                    id="password"
                    onChange={(e) => setPw(e.target.value)}
                    value={pw}
                    placeholder="Enter your password"
                    required 
                />

                <button>Sign In</button>
            </form>
            <p>
                        New User?<br />
                        <span className="line">
                                <Link to= "/register">Sign Up</Link>
                        </span>
                    </p>
        </section>
            )}
        </>
  )
}

export default Signin