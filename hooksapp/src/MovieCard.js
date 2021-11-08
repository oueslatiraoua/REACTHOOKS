import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Figure from "react-bootstrap/Figure";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ Movies }) => {
  return (
    <div className="Card">
      {Movies.map((movie) => (
        <div>
          <Figure.Image
            width={200}
            height={200}
            alt="171x180"
            src={movie.post}
          />
          <h3>{movie.title}</h3>

          <h6 className="desc">{movie.description}</h6>
          <StarRatingComponent
            editing={false}
            starCount={5}
            value={movie.rating}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
