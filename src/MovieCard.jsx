import { Button } from "bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movie/" + movie.id);
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.postUrl} />
        <Card.Body>
          <Card.Title>{movie.titre}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>{movie.note}</Card.Text>
          <button onClick={handleClick}>go to description</button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
