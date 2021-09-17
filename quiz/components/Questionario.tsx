import QuestaoModel from "../model/questao";
import Questao from "./Questao";
import Botao from "./Botao";

import styles from '../styles/Questionario.module.css';
interface QuestionarioProps {
  questao: QuestaoModel;
  ultima: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irPraProximoPasso: () => void;
}

export default function Questionario({ 
  questao, 
  ultima, 
  questaoRespondida, 
  irPraProximoPasso 
}: QuestionarioProps) {
  function respostaFornecida(indice: number) {
    if (questao.naoRespondida) {
      questaoRespondida(questao.responderCom(indice));
    }
  }

  return (
    <div className={styles.questionario}>
      {questao ? 
        <Questao
          valor={questao}
          tempoPraResposta={6}
          respostaFornecida={respostaFornecida}
          tempoEsgotado={irPraProximoPasso}
        />
        : false
      }

      <Botao 
        onClick={irPraProximoPasso} 
        texto={ultima ? 'Finalizar' : 'Próxima'}
      />
    </div>
  )
}