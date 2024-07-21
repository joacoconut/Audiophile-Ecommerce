import { useContext} from "react";
import { formatCurrency } from "../../functions/formatCurrency";
import { useCart } from "../../hooks/useCart";
import styles from "./styles/Total.module.scss";
import { GlobalContext } from "../../provider/Provider";

export const Total = () => {
  const { cart } = useCart();
  const {items} = useContext(GlobalContext)

  return (
    <div>
      <div className={styles.cartTotal}>
        <p className={styles.totalText}>Total</p>

        <span className={styles.totalPrice}>
          {formatCurrency(cart.reduce((total, cartItem) => {
            const item = items.find(i => i.id === cartItem.id)
            return total + (item?.price || 0) * cartItem.quantity
          }, 0))}
        </span>
      </div>
    </div>
  );
};
