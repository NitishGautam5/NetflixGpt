import React from "react";
import Moviecard from "./Moviecard";
import Undermoviescard from "./Undermoviescard";
const Movielist = ({ title, movies }) => {
  if (!movies) return;
  console.log(movies);
  return (
    <div className="">
      <div className=" overflow-x-scroll no-scrollbar">
        <h1 className=" text-xl font-bold p-3 pb-2 text-white">{title}</h1>
       
          <div className="flex w-[290%] ">
            {movies.map((movie) => (
              <>
               <Moviecard poster_path={movie.poster_path} kye={movie.id} />
               </>
              ))}

          </div>
       
      </div>
    </div>
  );
};

export default Movielist;
