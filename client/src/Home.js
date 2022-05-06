import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
	<h1>Welcome to DBS</h1>
	<nav>
        <ul>
          <li>
            {/*Link to the Sign In page*/}
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            {/*Link to the Register page*/}
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>


	</div>
);
};

export default Home;
