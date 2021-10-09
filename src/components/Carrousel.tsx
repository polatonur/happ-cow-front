import styles from "../styles/Carrousel.module.css";
import Image from "next/image";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useRef } from "react";

type Props = {
  photos: Array<string>;
};
const Carrousel = ({ photos }: Props) => {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClickScroll = (scrollOffset: number) => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
    }
  };
  return (
    <div className={styles.carrousel}>
      <div
        onClick={() => handleClickScroll(-700)}
        className={styles.arrow_left}
      >
        <CaretLeft size={38} />
      </div>
      <div
        onClick={() => handleClickScroll(700)}
        className={styles.arrow_right}
      >
        <CaretRight size={38} />
      </div>
      <div ref={ref} className={styles.scrollable_carroussel}>
        {photos.map((elem, index) => {
          return (
            <div key={index} className={styles.card}>
              <Image src={elem} width={240} height={240} alt="resto" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carrousel;
