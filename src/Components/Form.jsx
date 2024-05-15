import React, { useState, useContext, useEffect } from "react";
import "../styles/Form.css";
import axios from "axios";
import { UContext } from "../Context/UserContext";
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [foundUser, setFoundUser] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const {CurrentUser, setCurrentUser} = useContext(UContext);
const navigate =useNavigate()
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8000/users");
      setAllUsers(response.data);
      const foundUser = response.data.filter(
        (u) => u.email === user.email && u.password === user.password
      );
      console.log(foundUser)

      setFoundUser(foundUser);
      if (foundUser.length > 0) {
         await setCurrentUser(foundUser[0]);
        console.log(CurrentUser)
         navigate("/home");
      } else {
        console.log("Wrong email or password");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleRegister=()=>{
    navigate("/register")
  }
  return (
    <div className="login-box">
      <h1>Sign in</h1>
      <form>
        <div className="user-box">
          <input
            onChange={handleChange}
            name="email"
            value={user.email}
            type="email"
          />
          <label>Email Address</label>
        </div>
        <div className="user-box">
          <input
            onChange={handleChange}
            name="password"
            value={user.password}
            type="password"
          />
          <label>password</label>
        </div>

        <Link to="/" onClick={handleSubmit}>
          <span />
          <span />
          <span />
          <span />
          Sign in
        </Link>
        <br></br>
        <Link to="/register" onClick={handleRegister}>
          <span />
          <span />
          <span />
          <span />
          Register
        </Link>
      </form>
    </div>
  );
};

export default Form;
