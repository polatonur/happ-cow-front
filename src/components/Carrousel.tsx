import styles from "../styles/Carrousel.module.css";
import Image from "next/image";

type Props = {
  photos: Array<string>;
};
const Carrousel = ({ photos }: Props) => {
  return (
    <div className={styles.carrousel}>
      <div className={styles.scrollable_carroussel}>
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
