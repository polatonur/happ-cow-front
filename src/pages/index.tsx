import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import chevronRight from "../assets/img/chevron-right.svg";
import CardResto from "../components/CardResto";
const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Hero />
      <main className="container">
        <div className={styles.title}>
          <h1>Best Vegan Restaurants in Paris, France</h1>
          <span>
            View all <Image src={chevronRight} alt="chevron right" />
          </span>
        </div>
        <div className={`${styles.restos}`}>
          {[1, 2, 3, 4, 5].map((elem, index) => (
            <CardResto key={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
