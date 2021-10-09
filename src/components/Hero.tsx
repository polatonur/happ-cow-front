import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import searchIcon from "../assets/img/search.svg";
import HeroDecoration from "./HeroDecoration";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.search}>
        <h1 className={styles.title}>Find Vegan Reataurants</h1>
        <div className={styles.search_bar}>
          <input placeholder="Search" type="search" />
          <div className={styles.icon_div}>
            <Image src={searchIcon} alt="search"></Image>
          </div>
        </div>
        <div className={styles.decoration}>
          <HeroDecoration />
        </div>
      </div>
    </div>
  );
};

export default Hero;
