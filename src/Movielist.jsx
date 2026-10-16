import React from "react";
import MovieCard from "./MovieCard";
import movies from "./movies";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((element, index) => (
        <div key={index}>
          <MovieCard movie={element} />
        </div>
      ))}
    </>
  );
};

export default MovieList;
