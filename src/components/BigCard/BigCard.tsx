import styles from "./styles/BigCard.module.scss";
import { ReactElement } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Props {
  name: string;
  claim: string | undefined;
  button: ReactElement | ReactElement[];
}

export const BigCard = ({ name, claim, button }: Props) => {
    
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div data-aos="fade-right">
        <div className={styles.card}>
          <div>
            <img
              className={styles.cardImage}
              src="../../public/img/image-speaker-zx9.png"
              alt="Speaker"
            />

            <svg
              className={styles.cardCircles}
              width="944"
              height="944"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
                <circle cx="472" cy="472" r="235.5" />
                <circle cx="472" cy="472" r="270.5" />
                <circle cx="472" cy="472" r="471.5" />
              </g>
            </svg>
          </div>

          <div className={styles.cardContent}>
            <h1 className={styles.cardHeading}> {name} </h1>

            <p className={styles.cardText}> {claim} </p>

            <div className={styles.cardButton}>{button}</div>
          </div>
        </div>
      </div>
    </>
  );
};
