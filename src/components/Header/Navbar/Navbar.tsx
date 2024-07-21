import { Link } from "react-router-dom"
import { Rutas } from "../../../routes/Routes"
import styles from './styles/Navbar.module.scss'


export const Navbar = () => {
  return (
    <nav className={styles.headerNav}>
        <ul className={styles.headerUl}>
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
