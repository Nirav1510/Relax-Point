import React from "react";
import './Card.css'
import { img_300, unavailable } from "../../config/config";
import { Badge } from "@material-ui/core";
import ContentModal from '../ContentModal/ContentModal'

const Card = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <ContentModal>
      <Badge badgeContent={vote_average} color={(vote_average>7) ? "primary" : "secondary"} />
      <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV-Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default Card;
