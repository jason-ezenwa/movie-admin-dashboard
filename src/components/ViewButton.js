import React from "react";
import {Link} from "react-router-dom";
export default function ViewButton(props) {
  const movieName = encodeURIComponent(props.movieName.replace(/ /g, '_'));
  return (
    <Link className="view-button-link" to={`/movies/${movieName}`}>
      <button className="view-button">
        View
      </button>
    </Link>
  )
}