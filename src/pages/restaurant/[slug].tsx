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
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import useAuth from "../../hooks/useAuth";

export type NearRestos = Pick<
  Restaurant,
  "_id" | "address" | "name" | "thumbnail" | "type" | "rating"
>;
export type ReviewType = {
  _id: string;
  title: string;
  body: string;
  date: string;
  owner: string;
  ownerName: string;
  rating: string;
  restaurantId: string;
  pros: string[];
  cons: string[];
};
type Props = {
  data: {
    result: Restaurant;
    near: Array<NearRestos>;
    reviews: Array<ReviewType>;
    favList: Array<string>;
    ok: string;
  };
};
const RestaurantPage = ({ data }: Props) => {
  const [restoFavCount, setRestoFavCount] = useState(data.result.favorite);

  const router = useRouter();
  console.log("router==>", router);

  const [userFavList, setUserFavList] = useState(data.favList);
  const { user, login, logout } = useAuth();

  console.log("cooki name===>", Cookies.get("userName"));

  useEffect(() => {
    if (user) {
      getFavlist();
    } else {
      setUserFavList([]);
    }
  }, [user]);

  const getFavlist = async () => {
    try {
      console.log("effect");

      const id = Cookies.get("userId");
      const token = Cookies.get("userToken");
      const response = await axios.get(
        `http://localhost:5000/user/favlist?id=${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      interface Data {
        message: string[];
      }
      const data: Data = response.data;
      console.log(data.message);

      setUserFavList(data.message);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const handleClick = () => {
    if (user) {
      router.push({
        pathname: `/restaurant/review/[Id]`,
        query: {
          Id: data.result._id,
          name: data.result.name,
          next: router.asPath.split("?")[0],
        },
      });
    } else {
      router.push({
        pathname: `/login`,
        query: { next: router.asPath },
      });
    }
  };
  return (
    <Layout>
      <div className={styles.restaurant}>
        <RestaurantHeader
          userFavList={userFavList}
          setUserFavList={setUserFavList}
          restaurantId={data.result._id}
          name={data.result.name}
          rating={data.result.rating}
          type={data.result.type}
          restoFavCount={restoFavCount}
          setRestoFavCount={setRestoFavCount}
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
