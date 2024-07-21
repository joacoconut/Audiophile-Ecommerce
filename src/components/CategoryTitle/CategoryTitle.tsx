import styles from './styles/CategoryTitle.module.scss'

interface Props {
    category: string;
}

export const CategoryTitle = ({category}: Props) => {


  return (
    <div className={styles.positionCenter}>
      <h1 className={styles.heading} > {category} </h1>
    </div>
    
  )
}
