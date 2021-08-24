import QuestaoModel from '../model/questao';

import Enunciado from './Enunciado';
import Resposta from './Resposta';

import styles from '../styles/Questao.module.css';

interface QuestaoProps {
  valor: QuestaoModel
}

export default function Questao({ valor }: QuestaoProps) {
  const questao = valor

  function rendizarRespostas() {
    return questao.respostas.map((resposta, i) => { 
      return (
        <Resposta
          key={i}
          valor={resposta}
          indice={i}
          letra="A"
          corFundoLetra="#F2C866"
        />
      )
    })
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      {rendizarRespostas()}
    </div>
  )
}