import React from "react";
import "../styles/About.css";
const About = () => {
  return (
    <div>
      <div>
          <div className="about-me-content">
            <div className="image-wrapper">
              <img
                className="left-image"
                src="about4.jpeg"
                height="700px"
              />
            </div>
            <div className="about-right">
              <h1 className="about-header">Movie Night</h1>
              <br></br>
              
              <h3 className="about-subheader">      </h3>
              <br></br>
              <p>
                {" "}
                Welcome to Movie Night, your ultimate destination for all things movies!

At [Website Name], we're passionate about the magic of cinema and dedicated to bringing you the best movie-watching experience possible. Whether you're a die-hard film buff, a casual moviegoer, or just looking for your next cinematic adventure, you've come to the right place.      </p>
            
             
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default About;
