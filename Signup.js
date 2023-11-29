import React, {useState,useEffect } from 'react';
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

function SignUp() {
  const history=useNavigate();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/signup",{
        email,password
      })
      .then(res=>{
        if(res.data=="exist"){
            alert("user already exists")
        //   history("/home",{state:{id:email}})
        }
        else if(res.data=="notexist"){
            history("/home",{state:{id:email}})
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
        <h1>Sign up</h1>
        <form action="POST">
          <label htmlFor="">Email</label>
            <input type="text" 
            onChange={(e)=>{setEmail(e.target.value)}} 
            name="" id=""
            placeholder='Email' />
            <input type="password" 
                onChange={(e)=>{setPassword(e.target.value)}} 
                name="" id=""
                placeholder='Password' />

                <input type="submit" onClick={submit} />

        </form>

        <br />
        <p>OR</p>
        <br />

        <Link to="/login">Login page</Link>

    </div>
  )
}

export default SignUp
