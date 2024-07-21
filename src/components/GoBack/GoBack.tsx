import { useNavigate } from 'react-router-dom'
import styles from './styles/GoBack.module.scss'

export const GoBack = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

  return (
    <button 
        onClick={ goBack }
        className={styles.button}> Go Back </button>
  )
}
