import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "../components/Moviecard.css";
import Button from "react-bootstrap/Button";

const MovieDiscreption = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((e) => e.id == id);
  let description = movie.description;

  return (
    <div className="backgr">
      <div className="annonce">
        <Link to="/">
          <Button variant="danger">Accueil</Button>
        </Link>
        <ReactPlayer url={movie.urlvideo} />
        <h1>{description}</h1>
      </div>
    </div>
  );
};

export default MovieDiscreption;
