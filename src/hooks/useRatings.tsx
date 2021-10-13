import React from "react";
import RatingStar from "../assets/icon/RatingStar";
import RatingStarHalf from "../assets/icon/RatingStarHAlf";
import EmpityStar from "../assets/icon/EmpityStar";

const useRatings = (rating: number) => {
  const result = [1, 2, 3, 4, 5].map((elem, index) => (
    <RatingStar key={index} />
  ));
  const fullStar = Math.floor(rating);
  if (fullStar === rating) {
    let empityStar = 5 - fullStar;
    for (let i = 4; i > 4 - empityStar; i--) {
      result[i] = <EmpityStar key={i + 1} />;
    }
  } else {
    let empityStar = 5 - fullStar - 1;
    for (let i = 4; i > 4 - empityStar; i--) {
      result[i] = <EmpityStar key={i + 1} />;
    }
    result[Math.ceil(rating) - 1] = <RatingStarHalf key={10} />;
  }

  return result;
};

export default useRatings;
