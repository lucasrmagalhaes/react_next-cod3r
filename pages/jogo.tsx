import React, { useState } from "react"
import Porta from "../components/Porta"
import { atualizarPortas, criarPortas } from "../functions/portas"
import Link from "next/link"

import styles from "../styles/Jogo.module.css"

export default function jogo() {
  const [portas, setPortas] = useState(criarPortas(3, 2))

  function renderizarPortas() {
    return portas.map(porta => {
      return (
        <Porta 
          key={porta.numero} 
          porta={porta} 
          onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} 
        />
      )
    })
  }
  
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}