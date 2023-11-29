import React, {useState,useEffect } from 'react';
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

function Login() {

  const history= useNavigate();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/login",{
        email,password
      })
      .then(res=>{
        if(res.data=="exist"){
          history("/home",{state:{id:email}})
        }
        else if(res.data=="notexist"){
          alert("user have not sign up")
        }
      })
      .catch(e=>{
      alert("wrong det")
      console.log(e);

    })
  }
    catch(e){
      console.log(e);
    }
  }

  return (
    <div>
        <h1>Login</h1>
        <form action="POST">
            <input type="text" 
            onChange={(e)=>{setEmail(e.target.value)}} 
            name="email" id="email"
            placeholder='Email' />
            <input type="password" 
                onChange={(e)=>{setPassword(e.target.value)}} 
                name="password" id="password"
                placeholder='Password' />

                <input type="submit" onClick={submit} />

        </form>

        <br />
        <p>OR</p>
        <br />

        <Link to="/signup">SignUp page</Link>

    </div>
  )
}

export default Login
