import React, { useState } from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import searchIcon from "../assets/img/search.svg";
import HeroDecoration from "./HeroDecoration";
import { useRouter } from "next/router";

const Hero = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleClick = () => {
    router.push({ pathname: "/restaurant/search", query: { text: text } });
  };

  const handleKeyPress = (e: any) => {
    if (e.charCode === 13) {
      handleClick();
    }
  };
  return (
    <div className={styles.hero}>
      <div className={styles.search}>
        <h1 className={styles.title}>Find Vegan Reataurants</h1>
        <div className={styles.search_bar}>
          <input
            onChange={(e) => setText(e.target.value)}
            placeholder="Search"
            type="search"
            value={text}
            onKeyPress={handleKeyPress}
          />
          <div onClick={handleClick} className={styles.icon_div}>
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
