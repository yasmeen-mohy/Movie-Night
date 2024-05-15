import React from 'react';
import "../styles/MovieDetails.css"
import { useParams ,useNavigate} from 'react-router-dom';
import { useEffect, useState,useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { UContext } from '../Context/UserContext';

import axios from "axios"
import SimpleBackdrop from '../Components/Spinner';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { CurrentUser ,setCurrentUser} = useContext(UContext);
    const { id } = useParams();
    const navigate=useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/movie");
                const foundMovie = response.data.filter((m) => m.id === id);
                console.log(foundMovie);
                setMovie(foundMovie[0]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);
const handleEdit=()=>{
    navigate(`/edit/${id}`)
}
const handleDelete=async()=>{
    try{
        const response =  await axios.delete(`http://localhost:8000/movie/${id}`)
        if(response){
            console.log(response);
            console.log("3ada mn l try tmm")
                navigate("/home")
        }
    }
    catch(err){console.log(err)}
}
const AddToFav = async () => {
    try {
       // Check if CurrentUser.favourites exists
       if (CurrentUser.favourits) {
           // Update the favourites array
           CurrentUser.favourits.push(movie);
           // Create a copy of the favourites array
           const updatedFavourits = [...CurrentUser.favourits];
           // Update the user data in the API call
           const response = await axios.put(`http://localhost:8000/users/${CurrentUser.id}`, {...CurrentUser, favourits: updatedFavourits });
           console.log(response);
           console.log('Favorites updated:', updatedFavourits);
           navigate("/home");
       } else {
           console.error("Error: CurrentUser.favourites is undefined");
       }
    } catch (error) {
        console.error("Error adding to favorites:", error);
    }
}


    if (!movie) {
        return <SimpleBackdrop />;
    }

    return (
        <div style={{width:"97 vw", height:"90vh" , display :"flex" }}>   
 
    <div style={{width:"90%"}}>
            <div className="content-profile-page">
                
                <div className="profile-user-page card">
                    <div className="img-user-profile">
                        <img className="profile-bgHome" src={`https://image.tmdb.org/t/p/w500/${movie.img}`} alt="profile" />
                    </div>
                    <div className="user-profile-data">
                        <h1>{movie.title}</h1>
                        <br />
                    </div>
                    <div className="description-profile">{movie.overview}</div>
                    <div className="data-user" style={{ display: 'flex', justifyContent: "center", alignItems: "center", listStyle: 'none', padding: 0 }}>
                        <li style={{ flex: 1 }}>
                            <a><strong>{movie.rate}</strong><span>Rate</span></a>
                        </li>
                        <li style={{ flex: 1 }}>
                            <a><strong>{movie.views}</strong><span>Views</span></a>
                        </li>
                        <li style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <IconButton onClick={AddToFav} aria-label="heart" style={{ backgroundColor: "white", border: "none", padding: "0px", margin: "0px" }}>
                                <FavoriteIcon style={{ color: 'red', width: "50px", height: "50px" }} />
                            </IconButton>
                        </li>
                    </div>
                </div>
            </div>
         
        </div><div >  <div style={{ display: "flex" }}>
        <IconButton onClick={handleEdit} style={{ color: 'white', marginRight:"2%" }} size='large' aria-label="edit">
            <ModeEditIcon style={{ width: "40px", height: "30px" }} />
        </IconButton>
        <IconButton onClick={handleDelete} style={{ color: 'red' }} size='large' aria-label="delete">
            <DeleteIcon style={{ width: "40px", height: "30px" }} />
        </IconButton>
    </div>
    </div>
        </div>
    );
}

export default MovieDetails;
