import React from "react";
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input id="wd-username" placeholder="username" /> <br />
      <input id="wd-password" placeholder="password" type="password" /> <br />
      <Link id="wd-signin-btn" to="/Kanbas/Dashboard">
        <button className="btn btn-primary border border-white"> Sign in </button> </Link>
      <br />
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
    </div>
  );
}