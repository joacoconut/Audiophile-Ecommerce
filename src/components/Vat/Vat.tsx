
import { formatCurrency } from "../../functions/formatCurrency";
import styles from "./styles/Vat.module.scss";


interface Total {
    total: number
}

export const Vat = ({total}: Total) => {

  return (
    <div className={styles.vatContainer}>
      <p className={styles.vatText}> {`Vat (Included)`} </p>

      <span className={styles.vatPrice}> {formatCurrency(total * .2)} </span>
    </div>
  );
};
