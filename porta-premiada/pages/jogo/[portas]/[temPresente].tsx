import Head from 'next/head'
import React, { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import Link from "next/link"
import { useRouter } from "next/router"

import styles from "../../../styles/Jogo.module.css"

export default function Jogo() {
  const router = useRouter()
  const [portas, setPortas] = useState([])
  const [valido, setValido] = useState(false)

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
 
    const qtdePortasValida = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas

    setValido(qtdePortasValida && temPresenteValido)

  }, [portas, router.query.portas, router.query.temPresente])

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
        {valido 
          ? renderizarPortas()
          : <h1>Valores inválidos!</h1>
        }
      </div>
      <div className={styles.botoes}>
        <Link href="/" passHref>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}