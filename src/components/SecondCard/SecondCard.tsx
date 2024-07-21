import { ReactElement, useContext } from "react";
import styles from "./styles/SecondCard.module.scss";
import { GlobalContext } from "../../provider/Provider";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Props {
  button: ReactElement | ReactElement[];
}

export const SecondCard = ({ button }: Props) => {
  const { items } = useContext(GlobalContext);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div data-aos="fade-left">
        <div className={styles.cardContainer}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardHeading}> {items[4].name} </h2>

            <div className={styles.cardButton}>{button}</div>
          </div>
        </div>
      </div>
    </>
  );
};
