/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from "../styles/Pagination.module.css";
import {
  CaretDoubleLeft,
  CaretLeft,
  CaretRight,
  CaretDoubleRight,
} from "phosphor-react";
import { Dispatch, SetStateAction } from "react";
type Props = {
  count: number;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number | null>>;
  perPage: number;
};
const Pagination = ({ count, activePage, setActivePage, perPage }: Props) => {
  let pages = [];
  count = Math.ceil(count / perPage);

  console.log();
  if (count === 1) {
    pages = [1];
  } else if (count === 2) {
    pages = [1, 2];
  } else if (activePage === 1) {
    pages = [1, 2, 3];
  } else if (activePage === 2) {
    pages = [1, 2, 3];
  } else if (activePage === count) {
    pages = [count - 2, count - 1, count];
  } else if (activePage === count - 1) {
    pages = [count - 2, count - 1, count];
  } else {
    pages = [activePage - 1, activePage, activePage + 1];
  }
  return (
    <div className={styles.pagination}>
      <div className={styles.pages}>
        <CaretDoubleLeft
          size={30}
          onClick={() => setActivePage(1)}
          className={styles.icon}
        />
        <CaretLeft
          size={30}
          onClick={() => {
            if (activePage > 1) {
              setActivePage(activePage - 1);
            }
          }}
          className={styles.icon}
        />
        {!(activePage === 1 || activePage === 2) && <span>. . .</span>}
        {pages.map((elem) => {
          return (
            <span
              key={elem}
              className={`${styles.page_number_square} ${
                elem === activePage ? styles.active : ""
              }`}
            >
              <span
                className={styles.page_number}
                onClick={() => setActivePage(elem)}
              >
                {elem}
              </span>
            </span>
          );
        })}
        {!(activePage === count || activePage === count - 1) && (
          <span>. . .</span>
        )}
        <CaretRight
          className={styles.icon}
          size={30}
          onClick={() => {
            if (activePage < count) {
              setActivePage(activePage + 1);
            }
          }}
        />
        <CaretDoubleRight
          size={30}
          onClick={() => setActivePage(count)}
          className={styles.icon}
        />
      </div>
    </div>
  );
};
export default Pagination;
