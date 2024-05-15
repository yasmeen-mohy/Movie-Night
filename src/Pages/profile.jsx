import React from 'react';
import "../styles/Profile.css"
import { useContext, useEffect } from 'react';
import { UContext } from '../Context/UserContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { CurrentUser } = useContext(UContext);
    return (
    
        <div>
          
            <div class="content-profile-page">
  <div class="profile-user-page card">
    <div class="img-user-profile">
      <img class="profile-bgHome" src="about2.jpg" />
      <img class="avatar" src="user.jpeg" alt="User image" />
    </div>
  
    <div class="user-profile-data">
      <h1>{CurrentUser.username}</h1>
     <br></br>
    </div>
    <div class="description-profile">{CurrentUser.email}</div>
    <div class="description-profile">{CurrentUser.address}</div>
    
    <ul class="data-user">
      <li><Link to={'/favourits'}><strong>{CurrentUser.favourits.length}</strong><span>Favourits</span></Link></li>
      <li><a><strong>239</strong><span>Following</span></a></li>
    </ul>
  </div>
</div>


        </div>
    );
}

export default Profile;
