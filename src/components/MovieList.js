import React from "react";
import MovieCard from "./MovieCard";
import "../components/Moviecard.css";
//import MovieDiscreption from "./MovieDiscreption";
//import {Routes,Route} from "react-router-dom"
//import {Link}from "react-router-dom"

function MovieList(props) {
  const { movies } = props;

  return (
    <>
    
   
    

      {movies.length === 0 ? (
        <h2 className="pasmovie">Pas de movies avec ce titre</h2>
      ) : (
        movies.map((e) => <MovieCard element={e} />)
      )}
     
      
    </>
  );
}

export default MovieList;
