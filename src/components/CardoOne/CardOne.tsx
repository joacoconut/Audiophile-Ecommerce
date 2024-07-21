import { Link } from "react-router-dom";
import styles from "./styles/CardOne.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const CardOne = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div data-aos="fade-right">
        <Link to="/product/4">
          <div className={styles.cardImage}></div>
        </Link>
      </div>
    </>
  );
};
