import React from "react";
import "../components/Moviecard.css";
import StarRatingComponent from "react-star-rating-component";
import {Link}from "react-router-dom"


function MovieCard(props) {
  const { element } = props;

  return (
    <>
    <Link to={`/descr/${element.id}`}>
      <div className="card">
        <div>
          
          <img
            src={element.posterURL}
            style={{ width: "70px" ,height:"150px" }}
            alt="nwe movie"
          />
        </div>
        <div>
          <ul>
         <li> <p>{element.title}</p></li>
         <li> <p>{element.description}</p></li>
         <li> <p>{element.rating}</p></li>
         <li><p>{element.urlvideo}</p></li>


         <li>   <StarRatingComponent
          name="rate1"
          starCount={7}
          value={element.rating}/></li>

          </ul>
        </div>
       
      </div>
      </Link>
     


    </>
  );
}

export default MovieCard;
