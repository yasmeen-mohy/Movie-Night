import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid"
import '../styles/Form.css'

const FormRegister = () => {
  const navigate =useNavigate()
  const [user,setUser]=useState({username:"",email:"",password:"",address:""});
  const handleChange=(event)=>{
    const{name,value}=event.target
    setUser({...user,[name]:value});
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = { ...user, id: uuid(), favourits: [] }; // Create a new user object with id and favourits
      await axios.post("http://localhost:8000/users", newUser); // Send POST request with the new user object
      console.log(newUser);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
        <div className="login-box">
        <h1>Register</h1>
        <form>
        <div className="user-box">
            <input onChange={handleChange} name="username" value={user.username} type="text"/>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input onChange={handleChange} name="email" value={user.email} type="email"/>
            <label>Email Address</label>
          </div>
          <div className="user-box">
            <input onChange={handleChange} name="password" value={user.password} type="password"  />
            <label>password</label>
          </div>
          <div className="user-box">
            <input onChange={handleChange} name="address" value={user.address} type="text"/>
            <label>Address</label>
          </div>
          <a href="/" onClick={handleSubmit}>
            <span />
            <span />
            <span />
            <span />
            Submit
          </a>
        </form>
      </div>

    );
}

export default FormRegister;
