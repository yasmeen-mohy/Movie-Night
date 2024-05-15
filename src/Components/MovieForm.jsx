import React from 'react';
import "../styles/MovieForm.css"
import { useState } from 'react';
import {v4 as uuid} from "uuid";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
const MovieForm = () => {
  const navigate=useNavigate();
  const [movie,setMovie]=useState({title:"",overview:"",date:"",rate:"",views:"",img:""});
  const handleChange=(event)=>{
    const{name,value}=event.target
    setMovie({...movie,[name]:value});
  }
  const handleSubmit=(event)=>{
   event.preventDefault();
    try{
      setMovie({...movie,id:uuid()})
      console.log(movie);
      const res= axios.post("http://localhost:8000/movie",movie)
      navigate("/home")
    }
    catch(err){}
    setMovie({title:"",overview:"",date:"",rate:"",views:"",img:""})
  }
    return (
    <div>
  <div className="body-content">
    <div className="module login-box">
      <h1>Add Movie</h1>
      <form className="form">
        <div className="alert alert-error" />
        <input type="text"  value={movie.title}    onChange={handleChange}   placeholder="Movie Title" name="title"  />
        <input type="text"  value={movie.overview} onChange={handleChange}  placeholder="overview" name="overview"  />
        <input type="date"  value={movie.date}     onChange={handleChange}  placeholder="date" name="date"  />
        <input type="number"value={movie.rate}     onChange={handleChange}  placeholder="rate" name="rate"  />
        <input type="number"value={movie.views}    onChange={handleChange}  placeholder="views" name="views"  />
        <input value={movie.img} placeholder='paste image URL'  onChange={handleChange} type="text" name="img"   />
        <a href="/" onClick={handleSubmit}>
            <span />
            <span />
            <span />
            <span />
            Add
          </a>
      </form>
    </div>
  </div>
</div>
);
}

export default MovieForm;
