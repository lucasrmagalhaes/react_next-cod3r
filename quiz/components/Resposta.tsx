import RespostaModel from "../model/resposta";

import styles from '../styles/Resposta.module.css';

interface RespostaProps {
  valor: RespostaModel;
  indice: number;
  letra: string;
  corFundoLetra: string;
}

export default function Resposta({ valor, indice, letra, corFundoLetra }: RespostaProps) {
  const resposta = valor

  return (
    <div className={styles.resposta}>
      <div className={styles.conteudoResposta}>
        <div className={styles.frente}>
          <div 
            className={styles.letra}
            style={{
              backgroundColor: corFundoLetra
            }}
          >
            {letra}
          </div>
          <div className={styles.valor}>
            {resposta.valor}
          </div>
        </div>
        <div className={styles.verso}>

        </div>
      </div>
    </div>
  )
}