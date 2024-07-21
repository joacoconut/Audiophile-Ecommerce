import styles from './styles/StoreInfo.module.scss'


export const StoreInfo = () => {

  return (
    <div className={styles.storeInfoCard}>
        <div className={styles.storeInfoText}>
            <h2 className={styles.storeInfoHeading}>Bringing you the <span>best</span> audio gear</h2>

            <p className="text-p">
                Bringing you the best audio gear
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                rooms available for you to browse and experience a wide range of our products. Stop by our store 
                to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                audio equipment.
            </p>
        </div>

        <div className={styles.storeInfoImage}>
            
        </div>
    </div>
  )
}
