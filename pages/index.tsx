import Cartao from '../components/Cartao'
import Link from 'next/link'

import styles from '../styles/Formulario.module.css'

export default function Formulario() {
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#C0392C">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao></Cartao>
      </div>
      <div>
        <Cartao></Cartao>
        <Cartao bgcolor="#28A085">
          <Link href={`/jogo/4/2`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
