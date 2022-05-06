import { useState, useEffect } from 'react'

function NavBar() {
  function logout(){
    console.log(localStorage.clear())
    window.location.reload()
  }
  
//   useEffect(() => {
//     checkUser()
//   }, []);

  return (
  <>
    <button type="button" onClick={()=>{logout()}}>Logout</button>
  </>
  );
}

export default NavBar;
