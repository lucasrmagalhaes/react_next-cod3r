import styles from "../styles/Porta.module.css"
import PortaModel from "../model/porta"

interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

export default function Porta({ value, onChange }: PortaProps) {
  const selecionada = value.selecionada ? styles.selecionada : ''

  const alternarSelecao = e => onChange(value.alternarSelecao())

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{value.numero}</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  )
}