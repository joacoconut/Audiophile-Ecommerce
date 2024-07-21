import styles from "./styles/Features.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Props {
  feature: string | undefined;
  secondFeature: string | undefined;
  box:
    | {
        stock: string;
        element: string;
      }[]
    | undefined;
}

export const Features = ({ feature, secondFeature, box }: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div className={styles.featuresContainer}>
        <div data-aos="fade-right">
          <div className={styles.featuresDescription}>
            <h3 className={styles.featuresHeading}>Features</h3>

            <p className={styles.featuresText}>
              {feature} <br /> <br />
              {secondFeature}
            </p>
          </div>
        </div>

        
          <div className={styles.featuresBox}>
          <div data-aos="fade-left">
            <h3 className={styles.featuresHeading}>In the Box</h3>

            <ul>
              {box?.map((item) => (
                <li key={item.element} className={styles.boxList}>
                  <span className={styles.boxStock}> {item.stock} </span>
                  {item.element}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
