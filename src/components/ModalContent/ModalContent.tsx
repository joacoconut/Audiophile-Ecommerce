import { Link } from "react-router-dom";

import styles from "./styles/ModalContent.module.scss";
import { useCart } from "../../hooks/useCart";

export const ModalContent = () => {
  const { clearCart } = useCart();

  return (
    <div className={styles.modalContainer}>
      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <circle fill="#D87D4A" cx="32" cy="32" r="32" />
          <path
            stroke="#FFF"
            stroke-width="4"
            d="m20.754 33.333 6.751 6.751 15.804-15.803"
          />
        </g>
      </svg>

      <h2 className={styles.modalHeading}>
        Thank you <br />
        for your order
      </h2>

      <p className={styles.modalText}>Enjoy our products!</p>

      <Link to="/" className={styles.modalButton} onClick={clearCart}>
        Back to Home
      </Link>
    </div>
  );
};
