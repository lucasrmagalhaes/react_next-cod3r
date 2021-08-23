import QuestaoModel from '../model/questao';

import styles from '../styles/Questao.module.css';

interface QuestaoProps {
  valor: QuestaoModel
}

export default function Questao({ valor }: QuestaoProps) {
  const questao = valor

  return (
    <div className={styles.questao}>
      <h1>Questão</h1>
    </div>
  )
}