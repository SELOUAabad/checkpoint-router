import React from "react";
import MovieList from "../Movielist";
import movies from "../movies";

const Homepage = () => {
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default Homepage;
