import styles from "../styles/Porta.module.css"
import PortaModel from "../model/porta"

interface PortaProps {
  porta: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

export default function Porta({ porta, onChange }: PortaProps) {
  const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

  const alternarSelecao = e => onChange(porta.alternarSelecao())
  
  const abrir = e => {
    e.stopPropagation()
    onChange(porta.abrir())
  }

  function renderizarPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div 
          className={styles.macaneta}
          onClick={abrir}
        />
      </div>
    )
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
       <div className={`${styles.estrutura} ${selecionada}`}>
          { porta.aberta ? false : renderizarPorta() }
        </div>

        <div className={styles.chao}></div>
    </div>
  )
}