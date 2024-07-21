import { Link } from "react-router-dom";
import styles from "./styles/Category.module.scss";

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Props {
  img: string;
  title: string;
  route: string;
}

export const Category = ({ img, title, route }: Props) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      
        <Link to={route} className={styles.categoryCard}>
          <img src={img} className={styles.categoryImg} />
          <h4 className={styles.categoryTitle}> {title} </h4>

          <div className={styles.shopButtonContainer}>
            <p className={styles.shopText}>
              {" "}
              Shop
              <svg
                className={styles.shopIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                {" "}
                <path
                  fill="#d87d4a"
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                />
              </svg>
            </p>
          </div>
        </Link>
     
    </>
  );
};
