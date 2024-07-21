import { useCart } from "../../hooks/useCart";
import styles from "./styles/CartQuantity.module.scss";

export const CartQuantity = ({ item }: any) => {
  const { decreaseCartItem, increaseCartItem } = useCart();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => decreaseCartItem(item.id)}
      >
        -
      </button>

      <span className={styles.counter}> {item.quantity} </span>

      <button
        className={styles.button}
        onClick={() => increaseCartItem(item.id)}
      >
        +
      </button>
    </div>
  );
};
