/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Search.module.css";
import Image from "next/image";
import searchIcon from "../../assets/img/search.svg";
import Layout from "../../components/Layout";
import { Star, StarHalf } from "phosphor-react";
import axios from "axios";
import Pagination from "../../components/Pagination";

type Props = {
  queryText: string;
  data: {
    count: number;
    results: {
      _id: string;
      name: string;
      address: string;
      thumbnail: string;
      type: string;
      rating: number;
      description: string | null;
    }[];
  };
};

const Search = ({ queryText, data: { results, count } }: Props) => {
  const [filter, setFilter] = useState("");
  const [text, setText] = useState(queryText);
  const [searchResults, setSearchResults] = useState(results);
  const [searchCount, setSearchCount] = useState(count);
  const [activePage, setActivePage] = useState<null | number>(null);
  const [limit, setLimit] = useState(20);

  const getImageUri = (type: string) => {
    const imageUri = `https://www.happycow.net/img/category/category_${type
      .toLowerCase()
      .replace(/\s/g, "-")}.svg`;
    return imageUri;
  };

  const filterList = [
    "All",
    "vegan",
    "vegetarian",
    "Health Store",
    "veg-options",
    "Bakery",
    "Catering",
    "Ice Cream",
    "Veg Store",
    "Other",
    "Juice Bar",
    "Professional",
    "Delivery",
    "Organization",
  ];

  const handleClick = async () => {
    type Response = {
      data: {
        results: {
          _id: string;
          name: string;
          address: string;
          thumbnail: string;
          type: string;
          rating: number;
          description: string | null;
        }[];
        count: number;
      };
    };
    try {
      const response: Response = await axios.get(
        `https://happy-cow-back.api.dotonur.dev/restaurants/search?title=${text}&type=${filter}&limit=${limit}&page=${activePage}`
      );

      setSearchResults(response.data.results);
      setSearchCount(response.data.count);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (text === "") {
      handleClick();
    }
  }, [text]);

  useEffect(() => {
    if (filter !== "") {
      handleClick();
    }
  }, [filter]);

  useEffect(() => {
    if (activePage !== null) {
      handleClick();
    }
  }, [activePage]);

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

  const handleKeyPress = (e: any) => {
    if (e.charCode === 13) {
      handleClick();
      console.log("enter");
    }
  };
  return (
    <Layout>
      <div className={`${styles.search} container`}>
        <h1>Find Vegan Restaurants </h1>
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
        <main>
          <h1>Vegan Restaurants in Paris</h1>
          <div className={styles.filter}>
            Filter type:{" "}
            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            >
              {" "}
              {filterList.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item[0].toUpperCase() + item.slice(1)}
                  </option>
                );
              })}
            </select>
          </div>
          {searchCount === 0 ? (
            <p className={styles.no_result}>No result!</p>
          ) : (
            <div className={styles.restauran_list}>
              <p className={styles.count_result}>
                {searchCount} result{searchCount > 1 && "s"} found
              </p>
              {searchResults.map((elem) => {
                return (
                  <div key={elem._id} className={styles.card}>
                    <div className={styles.col_1}>
                      <Image
                        src={elem.thumbnail}
                        layout="fill"
                        alt={elem.name}
                      />
                    </div>
                    <div className={styles.col_2}>
                      <h2>{elem.name}</h2>
                      <span className={styles.type}>
                        <img
                          src={getImageUri(elem.type)}
                          alt={elem.type}
                          width={20}
                          height={20}
                        />{" "}
                        <span className={styles.type}>{elem.type}</span>
                      </span>
                      <p className={styles.description}>{elem.description}</p>
                      <div className={styles.address}>
                        <p className={styles.adress}>{elem.address}</p>
                      </div>
                      <p className={styles.rating}>{getRating(elem.rating)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
        {searchCount > 20 && (
          <Pagination
            count={searchCount}
            activePage={activePage === null ? 1 : activePage}
            setActivePage={setActivePage}
            perPage={limit}
          />
        )}
      </div>
    </Layout>
  );
};

export default Search;

export const getServerSideProps = async (context: {
  query: { text: string };
}) => {
  const title = context.query.text;
  console.log("title-->", title);
  console.log("title-->", context.query.text);

  try {
    const response = await axios.get(
      `https://happy-cow-back.api.dotonur.dev/restaurants/search?title=${title}`
    );
    const data = response.data;
    return {
      props: {
        data: data,
        queryText: title,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
