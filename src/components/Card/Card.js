import React from "react";
import { img_300, unavailable } from "../../config/config";

const Card = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <div>
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
