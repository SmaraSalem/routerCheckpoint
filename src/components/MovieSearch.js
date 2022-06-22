import StarRatingComponent from "react-star-rating-component";
//import {useState}from 'react'

function MovieSearch({ titleFilter, ratingFilter, valrating }) {
  /* const search = (e) => {
  let arr = movies.filter((el) =>
    el.title.toUpperCase().includes(e.target.value.trim().toUpperCase())
  );
  setMovies(arr);
  
}; */

  // const surStarClick=(rating) =>{
  //   let arr1 = movies.filter((e) => e.rating === rating.toString());
  //   setValuerating(rating)
  //   setMovies(arr1);
  // }

  return (
    <div>
     
      <h2>SearchMovie </h2>
      <input
        type="text"
        placeholder="movie title"
        onChange={(e) => titleFilter(e.target.value)}
      />

      <div style={{ fontSize: 50 }}>
        <StarRatingComponent
          name="rate"
          starCount={7}
          value={valrating}
          onStarClick={ratingFilter.bind(this)}
        />
      </div>
    </div>
  );
}

export default MovieSearch;
