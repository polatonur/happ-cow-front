import type { NextPage } from "next";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import axios from "axios";
import { GetServerSideProps } from "next";
import { z } from "zod";
import chevronRight from "../assets/img/chevron-right.svg";
import CardResto from "../components/CardResto";

const Restaurant = z.object({
  _id: z.string(),
  placeId: z.string(),
  name: z.string(),
  address: z.string(),
  location: z.object({
    lng: z.number(),
    lat: z.number(),
  }),
  phone: z.string(),
  thumbnail: z.string(),
  type: z.string(),
  category: z.number(),
  rating: z.number(),
  description: z.string(),
  pictures: z.array(z.string()),
  nearbyPlaces: z.array(z.string()),
});
const Data = Restaurant.array();
export type Data = z.infer<typeof Data>;
export type Restaurant = z.infer<typeof Restaurant>;

type Props = {
  data: Data;
  user: string | null;
  setUser: (val: string) => void;
};
const HomePage = ({ data, user, setUser }: Props) => {
  console.log(data);

  return (
    <Layout user={user} setUser={setUser}>
      <div className={styles.home}>
        <Hero />
        <main className="container">
          <div className={styles.title}>
            <h1>Best Vegan Restaurants in Paris, France</h1>
            <span>
              View all <Image src={chevronRight} alt="chevron right" />
            </span>
          </div>
          <div className={`${styles.restos}`}>
            {data.map((elem) => (
              <CardResto key={elem._id} restaurant={elem} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("1");

  try {
    const response = await axios.get("http://localhost:5000/restaurants/best");
    const data: Data = response.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
