import styles from "./styles/CartItem.module.scss";
import { formatCurrency } from "../../functions/formatCurrency";
import { CartQuantity } from "../CartQuantity/CartQuantity";
import { useCart } from "../../hooks/useCart";

export const CartItem = ({ item }: any) => {
  const { removeFromCart } = useCart();

  return (
    <>
      <div className={styles.itemContainer}>
        <div className={styles.itemContent}>
          <img className={styles.itemImage} src={item.src} alt={item.name} />

          <div className={styles.itemInfo}>
            <h4 className={styles.itemName}> {item.name} </h4>
            <span className={styles.itemPrice}>
              {" "}
              {formatCurrency(item.price)}{" "}
            </span>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <CartQuantity item={item} />

          <button
            className={styles.removeItem}
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};
