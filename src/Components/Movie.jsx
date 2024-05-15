import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "../styles/Movies.css"
const YourCardComponent = ({ id,img, title, overview }) => {
const navigate=useNavigate();   
const GoToDetails=()=>{
    navigate(`/details/${id}`)
}
    return (
        <div className='card-container'>
            <Card sx={{ maxWidth: 400, maxHeight: 550, border: "0.5 solid #3ED7DF", margin: 2, bgcolor: "transparent", }}>
                <CardActionArea onClick={GoToDetails}>
                    <CardMedia
                        component="img"
                        height="400"
                        image={`https://image.tmdb.org/t/p/w500/${img}`}
                        alt={title}
                        style={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                WebkitLineClamp: 2,
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {overview}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default YourCardComponent;
