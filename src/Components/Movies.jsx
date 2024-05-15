import React, { useEffect } from "react";
import { useLoaderData,useNavigate } from "react-router-dom";
import Movie from "./Movie";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import SimpleBackdrop from "../Components/Spinner"
const Movies = () => {
  const data = useLoaderData();
  useEffect(() => {
    console.log(data.results);
    console.log(data);
    console.log("Component mounted");
  }, []);
  const navigate=useNavigate();
  const AddMovie=()=>{
    navigate('/add')
  }
  if (!data) return <SimpleBackdrop></SimpleBackdrop>;
  return (
    <div style={{display:"flex", justifyContent:"space-evenly", width:"100vw", flexWrap:"wrap" }}>
      <div style={{ marginLeft: "90%" }}>
      <IconButton onClick={AddMovie} style={{ color: 'white'}}size='large' color="primary" aria-label="add">
        <AddIcon />
      </IconButton>
    </div>
      {data.map((m) => (
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
};

export default Movies;
