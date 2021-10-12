/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/Search.module.css";
import Image from "next/image";
import searchIcon from "../../assets/img/search.svg";
import Layout from "../../components/Layout";
import { Star, StarHalf } from "phosphor-react";

const Search = () => {
  const getImageUri = (type: string) => {
    const imageUri = `https://www.happycow.net/img/category/category_${type
      .toLowerCase()
      .replace(/\s/g, "-")}.svg`;
    return imageUri;
  };

  // create reating stars
  const getRating = (rating: number) => {
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
    <Layout>
      <div className={`${styles.search} container`}>
        <div className={styles.search_bar}>
          <input placeholder="Search" type="search" />
          <div className={styles.icon_div}>
            <Image src={searchIcon} alt="search"></Image>
          </div>
        </div>
        <main>
          <h1>Vegan Restaurants in Paris</h1>
          <div className={styles.restauran_list}>
            <div className={styles.card}>
              <div className={styles.col_1}></div>
              <div className={styles.col_2}>
                <h2>{"name"}</h2>
                <span className={styles.type}>
                  <img
                    src={getImageUri("vegan")}
                    alt={"type"}
                    width={20}
                    height={20}
                  />{" "}
                  <span className={styles.type}>{"vegan"}</span>
                </span>
                <p className={styles.description}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam distinctio numquam dolorum unde autem molestiae
                  cupiditate tempore alias possimus obcaecati ea soluta minus
                  dignissimos quo fuga, ullam aliquam neque. Esse?
                </p>
                <div className={styles.address}>
                  <p className={styles.adress}>
                    {"restaurant, Paris, France".split(", ")[1] +
                      ", " +
                      "estaurant, Paris, France".split(", ")[2]}
                  </p>
                </div>
                <p className={styles.rating}>{getRating(5)}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Search;
