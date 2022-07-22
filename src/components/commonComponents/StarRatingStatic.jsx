import React from "react";

const roundToQuarterDecimalLargeStars = (num) => {
  return (Math.round(num * 3) / 3).toFixed(2);
};

const roundToQuarterDecimalSmallStars = (num) => {
  return (Math.round(num * 4) / 4).toFixed(2);
};

const StarRatingStatic = (props) => {
  return <div className="stars" style={{ "--rating": roundToQuarterDecimalSmallStars(props.rating) }}></div>;
};

export function StarRatingStatic2(props) {
  return <div className="stars2" style={{ fontSize: "20px", "--rating": roundToQuarterDecimalLargeStars(props.rating) }}></div>;
}

export default StarRatingStatic;
