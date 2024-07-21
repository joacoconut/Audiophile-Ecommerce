import styles from './styles/ItemComponent.module.scss'
import { ReactElement } from "react";

interface Props {
    price?: ReactElement |ReactElement[]
    src: string;
    special?: string;
    name: string;
    description: string | undefined;
    button: ReactElement | ReactElement[]
}

export const ItemComponent = ({src, special, name, description, price, button}: Props ) => {

  return (
    <>
        <div className={styles.componentContainer}>
            <img src={src} alt={name} className={styles.itemImage} />

            <div className={styles.itemContent}>
                <span className={styles.itemSpan}> {special} </span>
                <h2 className={styles.itemHeading}> {name} </h2>
                <p> {description} </p>

                {price}

                <div className={styles.buttonContainer}>
                    <div className={styles.itemButton}>
                        {button}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
