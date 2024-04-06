import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";
const Seconderycontainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    <div className="  bg-black"> 
    <div className="-mt-52  relative">
        <Movielist title={"Now Playing"} movies={movies.Nowplayingmovies} />
       <Movielist title={"Top Rated"} movies={movies.TrendingMovie} />
       <Movielist title={"Populer"} movies={movies.PopularMovie} />
      <Movielist title={"Upcoming"} movies={movies.UpcomingMovie} />
  
    </div>
      </div>
  );
};

export default Seconderycontainer;
