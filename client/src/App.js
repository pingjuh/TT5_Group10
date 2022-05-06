import Home from './Home';
import { useState, useEffect } from 'react'
import NavBar from './NavBar';
import Projects from './Projects';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  function checkUser(){
    console.log(localStorage.getItem("jwt"))
    setLoggedIn(localStorage.getItem("jwt"))
  }
  
  useEffect(() => {
    checkUser()
  }, []);

  return (
    <main className="App">
      {!loggedIn && <Home/>}
      {loggedIn &&
      <>
      <NavBar />
      <h1> User is logged in</h1>
      <Projects />
      </>}
    </main>
  );
}

export default App;
