import styles from './styles/Price.module.scss'

interface Props {
    price: string | undefined;
}

export const Price = ({price}: Props ) => {
  return (
    <>
        <span className={styles.price}> {price} </span>
    </>
  )
}
