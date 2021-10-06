import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
