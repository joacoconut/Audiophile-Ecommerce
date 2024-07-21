import { Link } from "react-router-dom"
import styles from './styles/FooterNavbar.module.scss'
import { Rutas } from "../../routes/Routes"


export const FooterNavbar = () => {
  return (
    <nav className={styles.footerNav}>
        <ul className={styles.footerUl}>
            <li>
                <Link to={Rutas.ROOT} className={styles.navLink} > Home </Link>
            </li>

            <li>
                <Link to={Rutas.HEADPHONES} className={styles.navLink}> Headphones </Link>
            </li>

            <li>
                <Link to={Rutas.SPEAKERS} className={styles.navLink}> Speakers </Link>
            </li>

            <li>
                <Link to={Rutas.EARPHONES} className={styles.navLink} > Earphones </Link>
            </li>
        </ul>
    </nav>
  )
}
