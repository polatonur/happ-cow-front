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
        {reviews?.length | 0} Review{reviews?.length > 1 ? "s" : ""}
      </h1>
      {reviews.map((elem) => {
        return (
          <div key={elem._id} className={styles.card}>
            <div className={styles.writer}>
              <div className={styles.avatar}>
                <Image width={90} height={90} src={nobody} alt="kams" />
              </div>
              <div className={styles.name}> {elem.ownerName}</div>
            </div>
            <div className={styles.review}>
              <p className={styles.date}>
                {" "}
                {elem.date.split("T")[0].split("-").reverse().join("/")}
              </p>
              <h4>{elem.title}</h4>
              <p className={styles.body}>{elem.body}</p>
              {elem.pros.length > 0 && (
                <p className={styles.pros}>
                  {" "}
                  <span>Pros:</span>{" "}
                  {elem.pros.map((item, index) => {
                    return (
                      item !== "" && <span key={index}>{item + " ,"}</span>
                    );
                  })}
                </p>
              )}
              {elem.cons.length > 0 && (
                <p className={styles.cons}>
                  {" "}
                  <span>Cons:</span>{" "}
                  {elem.cons.map((item, index) => {
                    return (
                      item !== "" && <span key={index}>{item + " ,"}</span>
                    );
                  })}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantReviews;
