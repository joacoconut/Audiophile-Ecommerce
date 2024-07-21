import { ReactElement } from 'react';
import styles from './styles/ProductInfo.module.scss'


interface Props {
  title: string;
  claim: string | undefined;
  button: ReactElement | ReactElement[]
}

export const ProductInfo = ({title, claim, button}: Props) => {

  return (
    
        <div className={styles.productInfoContainer} >
            <div className={styles.mediaQueries}>

                <h3 className={styles.productInfoH3} >New Product</h3>
                <h1 className={styles.productInfoH1} > {title} </h1>

                <p className={styles.productInfoP} > {claim} </p>

                <div className={styles.productInfoButton}>
                  {button}
                </div>
                
            </div>
        </div>
   
  )
}
