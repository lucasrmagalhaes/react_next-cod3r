import styles from '../styles/Home.module.css'
import Tabuleiro from '../components/Tabuleiro'

export default function Home() {
  return (
    <div className={styles.container}>
      <Tabuleiro />
    </div>
  )
}
