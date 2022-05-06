import { useRef, useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom';

const SIGNIN_URL = '/signin'

const Signin = () => {
    const { setAuth } = useContext(AuthContext);
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
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
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
                    required 
                />

<label htmlFor="password">Password:</label>
                <input 
                    type ="password"
                    id="password"
                    onChange={(e) => setPw(e.target.value)}
                    value={pw}
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