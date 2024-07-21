import styles from './styles/InvertedItemComponent.module.scss'
import { ReactElement } from "react";

interface Props {
    src: string;
    special?: string;
    name: string;
    description: string | undefined;
    button: ReactElement | ReactElement[]
}


export const InvertedItemComponent = ({src, name, description, button}: Props) => {


  return (
    <>
        <div className={styles.componentContainer}>

            <div className={styles.itemContent}>

                <h2> {name} </h2>

                <p> {description} </p>

                <div className="m-top">
                    <div className={styles.itemButton}>
                        {button}
                    </div>
                </div>
                
            </div>

            <img src={src} alt="MarkOne Headphones" className={styles.itemImage} />

            
        </div>
    </>
  )
}
