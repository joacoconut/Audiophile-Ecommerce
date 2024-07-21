
import { formatCurrency } from "../../functions/formatCurrency";
import styles from "./styles/GrandTotal.module.scss";


interface Total {
    total: number
    shipping: number
}

export const GrandTotal = ({total, shipping}: Total) => {

  return (
    <div className={styles.grandContainer}>
      <p className={styles.grandText}>Grand Total</p>

      <span className={styles.grandPrice}> {formatCurrency(total + shipping)} </span>
    </div>
  );
};
