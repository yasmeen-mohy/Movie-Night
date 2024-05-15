import React, { useState, useEffect, useContext } from 'react';
import "../styles/Profile.css";
import { UContext } from '../Context/UserContext';
import axios from 'axios';
import  Movie  from "../Components/Movie"
const Favourits = () => {
    const { CurrentUser } = useContext(UContext);
    const [fav, setFav] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/users/${CurrentUser.id}`);
                setFav(response.data.favourits); // Assuming the data structure has a key called "favourites" containing the favorites
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [CurrentUser]);

    // Log the fav array after it has been updated
    useEffect(() => {
        console.log(fav);
    }, [fav]);

    return (
        <div style={{display:"flex", justifyContent:"space-evenly", width:"100vw", flexWrap:"wrap" }}>
      {fav.map((m) => (
        <Movie
          key={m.id}
          id={m.id}
          rate={m.rate}
          date={m.date}
          img={m.img}
          title={m.title}
          overview={m.overview}
          views={m.views}
        />
      ))}{" "}
    </div>
    );
}

export default Favourits;
