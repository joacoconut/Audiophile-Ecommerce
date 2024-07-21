import { Copyright } from '../Copyright/Copyright'
import styles from './styles/FooterClaim.module.scss'

export const FooterClaim = () => {
  return (
    <div>
        <p className={styles.footerContent}>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music   lovers and sound specialists who are devoted to helping you get the most out of personal audio.   Come and visit our demo facility - we’re open 7 days a week.
        </p>

        <Copyright />
    </div>
  )
}
