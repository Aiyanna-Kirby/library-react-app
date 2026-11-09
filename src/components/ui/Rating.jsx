import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {Array.from({ length: Math.floor(rating) }, (_, index) => (
        <FontAwesomeIcon icon={faStar} key={index} />
      ))}

      {!Number.isInteger(rating) && (
        <FontAwesomeIcon icon={faStarHalfAlt} />
      )}
    </div>
  );
};

export default Rating;
