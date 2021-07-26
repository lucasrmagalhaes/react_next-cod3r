import Head from 'next/head'
import React, { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import Link from "next/link"
import { useRouter } from "next/router"

import styles from "../../../styles/Jogo.module.css"

export default function jogo() {
  const router = useRouter()
  const [portas, setPortas] = useState([])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

  function renderizarPortas() {
    return portas.map(porta => {
      return (
        <>
          <Head>
            <title>Porta Premiada</title>
          </Head>

          <Porta 
            key={porta.numero} 
            porta={porta} 
            onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} 
          />
        </>
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