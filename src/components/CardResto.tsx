/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/CardResto.module.css";
import Image from "next/image";
import Link from "next/link";
import friend from "../assets/img/friend.svg";
import Heart from "../assets/icon/Heart";
import { Restaurant } from "../pages/index";
import useRating from "../hooks/useRatings";

type Props = {
  restaurant: Restaurant;
};

const CardResto = ({ restaurant }: Props) => {
  const slug = restaurant.name
    .toLowerCase()
    .replace(/\s|'/g, "-")
    .replace(/-+/g, "-");

  //create src  image uri
  const getImageUri = () => {
    const imageUri = `https://www.happycow.net/img/category/category_${restaurant.type
      .toLowerCase()
      .replace(/\s/g, "-")}.svg`;
    return imageUri;
  };

  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link
      href={{
        pathname: `restaurant/${slug}`,
        query: { id: restaurant._id },
      }}
    >
      <div className={styles.card}>
        <div className={styles.like}>
          <Heart />
        </div>
        <div className={styles.friend}>
          <Image src={friend} alt="friend"></Image>
        </div>
        <div className={styles.photo}>
          <Image
            width={270}
            height={176}
            src={restaurant.thumbnail}
            alt={restaurant.name}
          ></Image>
        </div>

        <div className={styles.info}>
          <div className={styles.name}>
            <img height={30} width={30} src={getImageUri()} alt="vegan"></img>
            <span>{restaurant.name}</span>
          </div>
          <p className={styles.adress}>
            {restaurant.address.split(", ")[1] +
              ", " +
              restaurant.address.split(", ")[2]}
          </p>
          <p>{useRating(restaurant.rating)}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardResto;
