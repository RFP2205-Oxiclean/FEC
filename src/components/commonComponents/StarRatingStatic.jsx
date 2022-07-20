import React from "react";

const StarRatingStatic = (props) => {
  return <div className="stars" style={{ "--rating": props.rating }}></div>;
};

  return (
    <div className = 'stars' style = {{'--rating': props.rating}} data-testid = "star-rating-static"></div>
  )
export function StarRatingStatic2(props) {
  return <div className="stars2" style={{ fontSize: "25px", "--rating": props.rating }}></div>;
}

export default StarRatingStatic;
