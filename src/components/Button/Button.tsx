import { Link } from "react-router-dom"
import styles from './styles/Button.module.scss'
import { MouseEventHandler } from "react";

interface Props {
    path: string;
    text: string;
    addCart?: MouseEventHandler<HTMLAnchorElement> | undefined;
}

export const Button = ({path, text, addCart}: Props) => {
  return (
    <>
        <Link 
          to={path} 
          className={styles.button} 
          onClick={addCart}
          > 

            {text} 

          </Link>
    </>
  )
}
