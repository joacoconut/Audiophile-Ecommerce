import { formatCurrency } from "../../functions/formatCurrency";
import { useCart } from "../../hooks/useCart";
import styles from "./styles/ItemDetail.module.scss";
import { ReactElement } from "react";

interface Props {
  id: number;
  price: number;
  src: string;
  name: string;
  description: string | undefined;
  quantity: number;
  button?: ReactElement | ReactElement[];
}

export const ItemDetail = ({ src, name, description, price, id }: Props) => {
  const { addToCart } = useCart();

  return (
    <>
      <div className={styles.componentContainer}>
        <img src={src} alt={name} className={styles.itemImage} />

        <div className={styles.itemContent}>
          <span className={styles.itemSpan}> New Product </span>
          <h2 className={styles.itemHeading}> {name} </h2>
          <p className={styles.itemDescription}> {description} </p>

          <h3 className={styles.itemPrice}>{formatCurrency(price)} </h3>

          <div className={styles.buttonContainer}>
            <div>
              <button
                className={styles.itemButton}
                onClick={() =>
                  addToCart({
                    id,
                    name,
                    price,
                    src,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
