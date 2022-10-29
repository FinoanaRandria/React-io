import React from "react";
import "../Assets/CSS/Login.css";
export default function Login() {
  return (
    <div className="card">
       <h1>Bienvenu Sur Sea </h1>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <br />
      <br />
      <div>
        <input type="text" placeholder="Password" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
}
