import { ReactElement } from 'react';
import styles from './styles/MayLikeComponent.module.scss'

interface Props {
  src: string;
  name: string;
  button: ReactElement | ReactElement[];
}

export const MayLikeComponent = ({src, name, button}: Props) => {
  return (
    <>
        <div className={styles.cardContainer}>
              <img src={src} alt={name} className={styles.cardImage} />
              <h3 className={styles.cardHeading}> {name} </h3>

              <div className={styles.cardButton}>
                  {button}
              </div>
        </div>
    </>
  )
}
