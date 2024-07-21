import { ReactElement } from 'react'
import styles from './styles/Footer.module.scss'


interface Props {
    children: ReactElement | ReactElement[];
}

export const Footer = ({children}: Props) => {


  return (
    <>
        <div className={styles.footer}>

            <div className="wrapper m-top-0 m-bottom-0">
                
                    {children}
                
            </div>
            
        </div>
    </>
  )
}
