import { Link } from 'react-router-dom'
import styles from './styles/AddToCart.module.scss'

export const AddToCart = () => {
  return (

    <>
        <div className={styles.componentContainer}>
            <div className={styles.quantity}>
                <button> - </button>
                <span> 1 </span>
                <button> + </button>
            </div>

            <div>
                <Link to="/*" className={styles.button} > Add to Cart </Link>
            </div>
        </div>
        
    </>

  )
}
