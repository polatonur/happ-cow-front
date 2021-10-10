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
import { useRouter } from "next/router";
import { useState } from "react";

export type NearRestos = Pick<
  Restaurant,
  "_id" | "address" | "name" | "thumbnail" | "type" | "rating"
>;
export type ReviewType = {
  title: string;
  body: string;
  date: string;
  owner: string;
  rating: string;
  restaurantId: string;
};
type Props = {
  data: {
    result: Restaurant;
    near: Array<NearRestos>;
    reviews: Array<ReviewType>;
    favList: Array<string>;
  };
  user: string | null;
  setUser: (val: string | null) => void;
};
const RestaurantPage = ({ data, user, setUser }: Props) => {
  console.log(data);

  const router = useRouter();
  const [userFavList, setUserFavList] = useState(data.favList);
  const handleClick = () => {
    router.push({
      pathname: `/restaurant/review/[Id]`,
      query: { Id: data.result._id, name: data.result.name },
    });
  };
  return (
    <Layout user={user} setUser={setUser}>
      <div className={styles.restaurant}>
        <RestaurantHeader
          userFavList={userFavList}
          setUserFavList={setUserFavList}
          restaurantId={data.result._id}
          name={data.result.name}
          rating={data.result.rating}
          type={data.result.type}
          favorite={data.result.favorite}
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
            <button onClick={handleClick}>
              {" "}
              <Pencil size={30} color="#fff" /> Add Review
            </button>
          </div>
          <Carrousel photos={data.result.pictures} />
          <NearbyRestos nearbyList={data.near} />
          <RestaurantReviews reviews={data.reviews} />
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

    const data: {
      result: Restaurant;
      near: Array<NearRestos>;
      reviews: Array<ReviewType>;
      favList: Array<String>;
    } = response.data;
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
