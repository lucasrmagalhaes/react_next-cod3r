import QuestaoModel from '../model/questao';

import Enunciado from './Enunciado';
import Resposta from './Resposta';

import styles from '../styles/Questao.module.css';
import Temporizador from './Temporizador';

const letras = [
  { valor: 'A', cor: '#F2C866' },
  { valor: 'B', cor: '#F266BA' },
  { valor: 'C', cor: '#85D4F2' },
  { valor: 'D', cor: '#BCE596' },
]

interface QuestaoProps {
  valor: QuestaoModel;
  respostaFornecida: (indice: number) => void;
  tempoEsgotado: () => void;
}

export default function Questao({ valor, respostaFornecida, tempoEsgotado }: QuestaoProps) {
  const questao = valor

  function rendizarRespostas() {
    return questao.respostas.map((resposta, i) => { 
      return (
        <Resposta
          key={i}
          valor={resposta}
          indice={i}
          letra={letras[i].valor}
          corFundoLetra={letras[i].cor}
          respostaFornecida={respostaFornecida}
        />
      )
    })
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      <Temporizador duracao={10} tempoEsgotado={tempoEsgotado} />
      {rendizarRespostas()}
    </div>
  )
}