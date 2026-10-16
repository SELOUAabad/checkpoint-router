import React from "react";
import movies from "../movies";
import { Link, useParams } from "react-router";
import { Button } from "bootstrap";

const DescriptionMovie = () => {
  const { id } = useParams();
  const movie = movies.find((element) => element.id == id);
  console.log(movie);
  return (
    <>
      <p>{movie.titre}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <Link to="/">go back</Link>
    </>
  );
};

export default DescriptionMovie;
