import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./Accueil";
import MovieDiscreption from "./components/MovieDiscreption";
import { useState } from "react";

const App = () => {
  
  const initMovies = [
    {
      id: 4 ,
      title: "El gharnoug",
      description: "filme tuninsiens- artify",
      rating: "4",
      posterURL:
        "https://pictures.artify.tn/media/yosu8cmb7ufutgavj0tk.jpg?width=300&aspect_ratio=2%3A3npm",
      urlvideo: "https://youtu.be/WurX9E4qehc",
    },
    {
      id: 3,
      title: "The dark knight",
      description:
        "Batman Excellent movie — watched it in original French with Spanish subtitles",
      rating: "2",
      posterURL:
        "https://fr.web.img4.acsta.net/c_310_420/pictures/22/04/26/13/15/4890195.jpg",
      urlvideo: "https://youtu.be/WurX9E4qehc",
    },
    {  id: 2 ,
      title: "Delicious Official Trailer",
      description:
        "Excellent movie — watched it in original French with Spanish subtitles",
      rating: "3",
      posterURL:
        "https://img-4.linternaute.com/qN-WR7DLLyCdwzybd_TCAnVsrpE=/1240x/c6bfd8570c3a4cdf8983a07bc8c67bb0/ccmcms-linternaute/135211.jpg",
      urlvideo: "https://youtu.be/WurX9E4qehc",
    },
    {  id: 1 ,
      title: "Mes frères et moi",
      description:
        "Excellent movie — watched it in original French with Spanish subtitles",
      rating: "5",
      posterURL:
        "https://resize1.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/famille/activites-enfants/meilleurs-films-netflix-pour-enfants/voyage-centre-terre-2-ile-mysterieuse/8176973-1-fre-FR/Voyage-au-centre-de-la-terre-2-l-ile-mysterieuse.jpg",
      urlvideo: "https://youtu.be/WurX9E4qehc",

    },
  ];

  const [movies, setMovies] = useState(initMovies);
  return (
    <div>
    
      <Routes>
        <Route path="/"exact  element={<Accueil movies={movies} setMovies={setMovies}/>} />

        <Route path="/descr/:id" element={<MovieDiscreption movies={movies} />} />
      </Routes>
    </div>
  );
};

export default App;
