import { ReactElement } from "react"
import styles from './styles/Categories.module.scss'


interface Props {
  children: ReactElement | ReactElement[];
}

export const Categories = ({children}: Props) => {

  return (
    <>
        <div className={styles.categories}>
            {children}
        </div>
    </>
  )
}
