import styles from "./styles/Galery.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Props {
  src1: string | undefined;
  src2: string | undefined;
  src3: string | undefined;
  name: string;
}

export const Galery = ({ src1, src2, src3, name }: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div className={styles.galeryContainer}>
        <div className={styles.smallPicsContainer}>
          <div data-aos="fade-down">
            <div className="o-hidden">
              <img src={src1} alt={name} className={styles.smallPic} />
            </div>
          </div>

          <div data-aos="fade-up">
            <div className="o-hidden">
              <img src={src2} alt={name} className={styles.smallPic} />
            </div>
          </div>
        </div>

        <div className={styles.bigPicContainer}>
          <div data-aos="fade-left">
            <img src={src3} alt={name} className={styles.bigPic} />
          </div>
        </div>
      </div>
    </>
  );
};
