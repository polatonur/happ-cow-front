import axios from "axios";
import { GetServerSideProps } from "next";
import { Pencil } from "phosphor-react";
import styles from "../../styles/Restaurant.module.css";
import { Restaurant } from "../../pages/index";
import Layout from "../../components/Layout";
import RestaurantHeader from "../../components/RestaurantHeader";
import RestaurantContact from "../../components/RestaurantContact";
import Carrousel from "../../components/Carrousel";
import NearbyRestos from "../../components/NearbyRestos";
import RestaurantReviews from "../../components/RestaurantReviews";

export type NearRestos = Pick<
  Restaurant,
  "_id" | "address" | "name" | "thumbnail" | "type" | "rating"
>;
type Props = { data: { result: Restaurant; near: Array<NearRestos> } };
const RestaurantPage = ({ data }: Props) => {
  return (
    <Layout>
      <div className={styles.restaurant}>
        <RestaurantHeader
          name={data.result.name}
          rating={data.result.rating}
          type={data.result.type}
        />
        <main className="container">
          <RestaurantContact
            type={data.result.type}
            address={data.result.address}
            description={data.result.description}
            location={data.result.location}
            phone={data.result.phone}
          />
          <div className={styles.add_review}>
            <button>
              {" "}
              <Pencil size={30} color="#fff" /> Add Review
            </button>
          </div>
          <Carrousel photos={data.result.pictures} />
          <NearbyRestos nearbyList={data.near} />
          <RestaurantReviews />
        </main>
      </div>
    </Layout>
  );
};

export default RestaurantPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;
  try {
    const response = await axios.get(`http://localhost:5000/restaurant/${id}`);

    const data: { result: Restaurant; near: Array<NearRestos> } = response.data;
    // console.log("axios response", data.result);

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
