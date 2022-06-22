import { useState } from "react";
import React from "react";

function MovieAdd({ movies, setMovies }) {
  
  const [obj, setObj] = useState({
    id : 0,
    title: "",
    description: "",
    rating: "",
    posterURL: "",
    urlvideo:""

  });

 

  const onChange = (e) => {
    console.log(e.target.value);
    setObj({ ...obj, [e.target.name]: e.target.value.trim() });
  };


  const addMovie = () => {
    setMovies([obj, ...movies]);
  };


  return (
    <div>
      <h2>addMovie </h2>
      <form>
      <input
      type="text"
      placeholder="id movies"
      name="id"
      onChange={onChange}
    /><br></br>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={onChange}
        />
        <br></br>
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={onChange}
        />
        <br></br>
        <input
          type="text"
          placeholder="rating"
          name="rating"
          onChange={onChange}
        />
        <br></br>
        <input
          type="text"
          placeholder="posterURLimage"
          name="posterURL"
          onChange={onChange}
        /><br></br>
        <input
        type="text"
        placeholder="posterURLvideo"
        name="urlvideo"
        onChange={onChange}
      />
        <br></br>
        <button type="button" onClick={addMovie}>
          Save
        </button>
      </form>
    </div>
  );
}

export default MovieAdd;
