import React from "react";
import styles from "../styles/CardResto.module.css";
import Image from "next/image";
import link from "next/link";
import friend from "../assets/img/friend.svg";
import Heart from "../assets/icon/Heart";
import RatingStar from "../assets/icon/RatingStar";
import RatingStarHalf from "../assets/icon/RatingStarHAlf";
import vegan from "../assets/img/category_vegan.svg";
import vegetarian from "../assets/img/category_vegetarian.svg";
import vegStore from "../assets/img/category_veg-store.svg";
const CardResto = () => {
  return (
    <div className={styles.card}>
      <span className={styles.like}>
        <Heart />
      </span>
      <span className={styles.friend}>
        <Image src={friend} alt="friend"></Image>
      </span>
      <div className={styles.photo}></div>
      {/* <Image src={"d"} ></Image> */}
      <div className={styles.info}>
        <p className={styles.name}>
          <Image width={18} height={18} src={vegan} alt="vegan"></Image>
          <span>{" La maison"}</span>
        </p>
        <p className={styles.adress}>{"Puteau"}</p>
        <p>
          <RatingStar />
          <RatingStarHalf />
        </p>
      </div>
    </div>
  );
};

export default CardResto;
