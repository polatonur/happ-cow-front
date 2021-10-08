/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React from "react";
import styles from "../styles/NearbyRestos.module.css";
import { NearRestos } from "../pages/restaurant/[slug]";
import Link from "next/link";
import Image from "next/image";

type Props = {
  nearbyList: Array<NearRestos>;
};

const NearbyRestos = ({ nearbyList }: Props) => {
  const getSlug = (name: string) => {
    const slug = name.toLowerCase().replace(/\s|'/g, "-").replace(/-+/g, "-");

    return slug;
  };

  //create src  image uri
  const getImageUri = (type: string) => {
    if (type === "veg-optiodsans") {
      return "https://www.happycow.net/img/category/category_veg-friendly.svg";
    } else {
      const imageUri = `https://www.happycow.net/img/category/category_${type
        .toLowerCase()
        .replace(/\s/g, "-")}.svg`;
      console.log(imageUri);

      return imageUri;
    }
  };
  return (
    <div className={styles.nearby_restos}>
      <h1>Nearby Restaurants</h1>
      <div className={styles.carraussel}>
        {nearbyList.map((elem) => {
          return (
            <Link
              key={elem._id}
              href={{
                pathname: `restaurant/${getSlug(elem.name)}`,
                query: { id: elem._id },
              }}
            >
              <div className={styles.card}>
                <div className={styles.photo}>
                  <Image
                    width={270}
                    height={176}
                    src={elem.thumbnail}
                    alt={elem.name}
                  ></Image>
                </div>

                <div className={styles.info}>
                  <div className={styles.name}>
                    <img
                      height={30}
                      width={30}
                      src={getImageUri(elem.type)}
                      alt="vegan"
                    ></img>
                    <span>{elem.name}</span>
                  </div>
                  <p className={styles.adress}>
                    {elem.address.split(", ")[1] +
                      ", " +
                      elem.address.split(", ")[2]}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NearbyRestos;
