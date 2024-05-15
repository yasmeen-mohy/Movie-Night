import React from 'react';
import Navbar from "../Components/Navbar"
import { Outlet } from 'react-router-dom';
import "../styles/AppModule.css"
const AppModule = () => {
    return (
        <div className='container'>
          <div className='first'>  <Navbar></Navbar></div>
            <div className='second'> <Outlet></Outlet> </div>
        </div>
    );
}

export default AppModule;

