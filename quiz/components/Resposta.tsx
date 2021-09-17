import RespostaModel from "../model/resposta";

import styles from '../styles/Resposta.module.css';

interface RespostaProps {
  valor: RespostaModel;
  indice: number;
  letra: string;
  corFundoLetra: string;
  respostaFornecida: (indice: number) => void;
}

export default function Resposta({ valor, indice, letra, corFundoLetra, respostaFornecida }: RespostaProps) {
  const resposta = valor

  return (
    <div 
      className={styles.resposta}
      onClick={() => respostaFornecida(indice)}
    >
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