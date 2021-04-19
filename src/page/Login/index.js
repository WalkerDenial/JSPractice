import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const { loginAsUser, loginAsAdmin, history } = props;

  const userLoginHandler = () => {
    loginAsUser();
    history.replace("/backend");
  };

  const adminLoginHandler = () => {
    loginAsAdmin();
    history.replace("/admin");
  };

  return (
    <>
      <h1>Login.</h1>
      <button onClick={userLoginHandler}>User.</button>
      <br />
      <br />
      <button onClick={adminLoginHandler}>Admin.</button>
      <br />
      <br />
      <Link to="/">回首页</Link>
    </>
  );
}

export default Login;
