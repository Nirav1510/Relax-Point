import React from "react";
import './Card.css'
import { img_300, unavailable } from "../../config/config";

const Card = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <div className="media">
      <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b>{title}</b>
      <span className="sunTitle">
        {media_type === "tv" ? "TV-Series" : "Movie"}
        <span className="sunTitle">{date}</span>
      </span>
    </div>
  );
};

export default Card;
