import React from "react";
import styles from "../styles/CardResto.module.css";
import Image from "next/image";
import link from "next/link";
import friend from "../assets/img/friend.svg";
import Heart from "../assets/icon/Heart";
import RatingStar from "../assets/icon/RatingStar";
import RatingStarHalf from "../assets/icon/RatingStarHAlf";
import EmpityStar from "../assets/icon/EmpityStar";
import vegan from "../assets/img/category_vegan.svg";
import vegetarian from "../assets/img/category_vegetarian.svg";
import vegstore from "../assets/img/category_veg-store.svg";
import { Restaurant } from "../pages/index";

type Props = {
  restaurant: Restaurant;
};

const CardResto = ({ restaurant }: Props) => {
  //create src  image uri
  const imageUri = `../assets/img/category_${restaurant.type
    .toLowerCase()
    .replace(/\s/g, "-")}.svg`;
  console.log(imageUri);

  //calculate rating starts
  const ratingStars = (rating: number) => {
    const result = [1, 2, 3, 4, 5].map((elem, index) => (
      <RatingStar key={index} />
    ));
    const fullStar = Math.floor(rating);
    if (fullStar === rating) {
      let empityStar = 5 - fullStar;
      for (let i = 4; i > 4 - empityStar; i--) {
        result[i] = <EmpityStar />;
      }
    } else {
      let empityStar = 5 - fullStar - 1;
      for (let i = 4; i > 4 - empityStar; i--) {
        result[i] = <EmpityStar />;
      }
      result[Math.ceil(rating) - 1] = <RatingStarHalf />;
    }
    console.log(result);

    return result;
  };

  return (
    <div className={styles.card}>
      <span className={styles.like}>
        <Heart />
      </span>
      <span className={styles.friend}>
        <Image src={friend} alt="friend"></Image>
      </span>
      <div className={styles.photo}>
        <Image
          width={270}
          height={176}
          src={restaurant.thumbnail}
          alt={restaurant.name}
        ></Image>
      </div>

      <div className={styles.info}>
        <p className={styles.name}>
          <Image
            width={18}
            height={18}
            src="/public/favicon.ico"
            alt="vegan"
          ></Image>
          <span>{restaurant.name}</span>
        </p>
        <p className={styles.adress}>
          {restaurant.address.split(", ")[1] +
            ", " +
            restaurant.address.split(", ")[2]}
        </p>
        <p>{ratingStars(restaurant.rating)}</p>
      </div>
    </div>
  );
};

export default CardResto;
