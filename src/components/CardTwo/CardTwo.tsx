import styles from "./styles/CardTwo.module.scss";
import { ReactElement } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Props {
  name?: string;
  button: ReactElement | ReactElement[];
}

export const CardTwo = ({ name, button }: Props) => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div data-aos="fade-left">
        <div className={styles.cardContent}>
          <h2 className={styles.cardHeading}> {name} </h2>

          <div className={styles.cardButton}>{button}</div>
        </div>
      </div>
    </>
  );
};
