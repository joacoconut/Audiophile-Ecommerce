import styles from "./styles/SummaryItem.module.scss";
import { formatCurrency } from "../../functions/formatCurrency";

export const SummaryItem = ({ item }: any) => {
  return (
    <>
      <div className={styles.itemContainer}>
        <div className={styles.itemContent}>
          <img className={styles.itemImage} src={item.src} alt={item.name} />

          <div className={styles.itemInfo}>
            <div>
              <h4 className={styles.itemName}> {item.name} </h4>
              <span className={styles.itemPrice}>
                {" "}
                {formatCurrency(item.price)}{" "}
              </span>
            </div>
          </div>
        </div>

        <p> {`x${item.quantity}`} </p>
      </div>
    </>
  );
};
