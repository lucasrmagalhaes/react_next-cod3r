import QuestaoModel from '../model/questao';

import styles from '../styles/Questao.module.css';
import Enunciado from './Enunciado';

interface QuestaoProps {
  valor: QuestaoModel
}

export default function Questao({ valor }: QuestaoProps) {
  const questao = valor

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
    </div>
  )
}