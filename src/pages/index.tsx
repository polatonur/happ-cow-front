import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import logo from "../assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="happ cow" />
      </div>
      <div className={styles.nav_bar}>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </header>
  );
};

export default Home;
