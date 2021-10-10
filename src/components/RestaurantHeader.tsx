/* eslint-disable @next/next/no-img-element */
import { Star, StarHalf, Heart } from "phosphor-react";
import styles from "../styles/RestaurantHeader.module.css";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";
import { array } from "zod";

type Props = {
  name: string;
  rating: number;
  type: string;
  favorite: number;
  restaurantId: string;
  setUserFavList: (val: string[]) => void;
  userFavList: Array<string>;
};

const RestaurantHeader = ({
  name,
  rating,
  type,
  favorite,
  restaurantId,
  setUserFavList,
  userFavList,
}: Props) => {
  const slug = name.toLowerCase().replace(/\s|'/g, "-").replace(/-+/g, "-");

  //create src  image uri
  const getImageUri = () => {
    const imageUri = `https://www.happycow.net/img/category/category_${type
      .toLowerCase()
      .replace(/\s/g, "-")}.svg`;
    return imageUri;
  };

  const handleClick = async () => {
    const userId = Cookies.get("UserId");
    const token = Cookies.get("UserToken");
    try {
      const response: any = await axios.post(
        "http://localhost:5000/user/favorites",
        {
          restaurantId: restaurantId,
          userId: userId,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setUserFavList(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  console.log("favlist===>", userFavList);

  // create reating stars
  const getRating = () => {
    const result = [1, 2, 3, 4, 5].map((elem, index) => (
      <Star key={index} size={20} color="#ffcc00" weight="fill" />
    ));
    const fullStar = Math.floor(rating);
    if (fullStar === rating) {
      let empityStar = 5 - fullStar;
      for (let i = 4; i > 4 - empityStar; i--) {
        result[i] = <Star size={20} color="#7a7a7a" />;
      }
    } else {
      let empityStar = 5 - fullStar - 1;
      for (let i = 4; i > 4 - empityStar; i--) {
        result[i] = <Star size={20} color="#7a7a7a" />;
      }
      result[Math.ceil(rating) - 1] = (
        <StarHalf size={20} color="#ffcc00" weight="fill" />
      );
    }
    return result;
  };
  return (
    <div className={styles.resto_header}>
      <div className="container">
        <div className={styles.col_1}>
          <h2>{name}</h2>
          <div className={styles.rating_and_type}>
            <span>
              <img src={getImageUri()} alt={type} width={20} height={20} />{" "}
              <span className={styles.type}>{type}</span>
            </span>{" "}
            <span>{getRating()}</span>
            <span className={styles.review_count}>{"0 review"}</span>
          </div>
        </div>
        <div className={styles.col_2}>
          <div onClick={() => handleClick()} className={styles.add_favorite}>
            <span className={styles.fav_count}>{favorite}</span>
            <Star
              size={23}
              color="#7c4ec4"
              // weight={
              //   userFavList.indexOf(restaurantId) !== -1 ? "fill" : "regular"
              // }
            />
          </div>
          <span>Favorite</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
