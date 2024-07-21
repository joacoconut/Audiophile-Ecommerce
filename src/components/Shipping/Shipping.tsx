import { formatCurrency } from "../../functions/formatCurrency";
import styles from "./styles/Shipping.module.scss";

export const Shipping = () => {
  return (
    <div className={styles.shippingContainer}>
      <p className={styles.shippingText}>Shipping</p>

      <span className={styles.shippingPrice}> {formatCurrency(50)} </span>
    </div>
  );
};
