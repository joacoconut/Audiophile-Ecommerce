import { ReactElement } from 'react';
import styles from './styles/BlackHeader.module.scss'

interface Props {
  children: ReactElement | ReactElement[];
}

export const BlackHeader = ({ children }: Props) => {
  return (
   <>

    <div className={styles.black}>
      {children}  
    </div>
     
     
   </>  
  )
}