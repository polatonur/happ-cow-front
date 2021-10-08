import { Clock, House, MapPin, Phone } from "phosphor-react";
import Map from "./Map";
import React from "react";
import styles from "../styles/RestaurantContact.module.css";

type Props = {
  address: string;
  description: string;
  location: {
    lng: number;
    lat: number;
  };
  phone: string;
};
const RestaurantContact = ({
  address,
  description,
  location,
  phone,
}: Props) => {
  console.log(description);

  return (
    <div className={styles.resto_contact_info}>
      <div className={styles.col_1}>
        <div className={styles.line_1}>
          <span>
            {" "}
            <House size={20} color="#7a7a7a" />
          </span>
          <span>/</span>
          <span>Europe</span>
          <span>/</span>
          <span>France</span>
          <span>/</span>
          <span className={styles.city}>{"Puteau"}</span>
        </div>
        <div className={styles.line_2}>
          <div className={styles.line_2_col_1}>
            <div>
              <Clock size={48} color="#7a7a7a" />
            </div>
            <div>
              <p>HOURS</p>
              {description
                ?.split("Open")[1]
                ?.split(/[.,]/g)
                ?.map((elem, index) => {
                  return <p key={index}>{elem}</p>;
                })}
            </div>
          </div>
          <div className={styles.line_2_col_2}>
            <div>
              <Phone size={48} color="#7a7a7a" />
            </div>
            <div>
              <p>CONTACT</p>
              <p>{phone}</p>
            </div>
          </div>
          <div className={styles.line_2_col_3}>
            <div>
              <MapPin size={48} color="#7a7a7a" />
            </div>
            <div>
              <p>FIND</p>
              <p>{address}</p>
            </div>
          </div>
        </div>
        <div className={styles.line_3}>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.col_2}>
        <Map location={location} />
      </div>
    </div>
  );
};

export default RestaurantContact;
