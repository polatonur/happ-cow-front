import React from "react";
import styles from "../styles/RestauranReviews.module.css";
import Image from "next/image";
import nobody from "../assets/img/nobody.svg";
import { ReviewType } from "../pages/restaurant/[slug]";

type Props = {
  reviews: Array<ReviewType>;
};
const RestaurantReviews = ({ reviews }: Props) => {
  return (
    <div className={styles.reviews}>
      <h1>
        {reviews?.length | 0} Review {reviews?.length > 0 ? "s" : ""}
      </h1>
      <div className={styles.card}>
        <div className={styles.writer}>
          <div className={styles.avatar}>
            <Image width={90} height={90} src={nobody} alt="kams" />
          </div>
          <div className={styles.name}> kams</div>
        </div>
        <div className={styles.review}>
          <p className={styles.date}> 12/12/20</p>
          <h4>Amazing</h4>
          <p>
            Great shop with friendly staff. They provide vegan products with
            lots of variety (including international brand). Was glad to find a
            grocery shop near Boulogne-Billancourt
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantReviews;
