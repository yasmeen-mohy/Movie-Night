import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/MovieForm.css"

const MovieEdit = () => {
    const [movie, setMovie] = useState(null);
    let image="";
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/movie");
                const foundMovie = response.data.filter((m) => m.id === id);
                console.log(foundMovie);
                setMovie(foundMovie[0]);
                image=foundMovie[0]["img"]
                console.log(image);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMovie(prevMovie => ({
            ...prevMovie,
            [name]: value,
            'img': prevMovie.img // Preserve the img field
        }));
    }
    
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8000/movie/${id}`, movie);
            console.log("Movie updated successfully:", response.data);
            navigate('/home'); // Redirect to home page after updating movie
        } catch (error) {
            console.error("Error updating movie:", error);
        }
    }

    // Render input fields only when movie is loaded
    return (
        <div>
            <div className="body-content">
                <div className="module login-box">
                    <h1>Edit Movie</h1>
                    {movie && (
                        <form className="form">
                            <div className="alert alert-error" />
                            <input type="text" value={movie.title} onChange={handleChange} placeholder="Movie Title" name="title" />
                            <input type="text" value={movie.overview} onChange={handleChange} placeholder="Overview" name="overview" />
                            <input type="date" value={movie.date} onChange={handleChange} placeholder="Date" name="date" />
                            <input type="number" value={movie.rate} onChange={handleChange} placeholder="Rate" name="rate" />
                            <input type="number" value={movie.views} onChange={handleChange} placeholder="Views" name="views" />
                           
                            <a href="/" onClick={handleSubmit}>
            <span />
            <span />
            <span />
            <span />
            Edit
          </a>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieEdit;
