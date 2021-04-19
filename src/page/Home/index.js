import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home.</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/backend">Backend</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
