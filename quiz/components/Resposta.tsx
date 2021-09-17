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
  const resposta = valor;
  const respostaReveleada = resposta.revelada ? styles.respostaReveleada : '';

  return (
    <div 
      className={styles.resposta}
      onClick={() => respostaFornecida(indice)}
    >
      <div className={`${respostaReveleada} ${styles.conteudoResposta}`}>
        <div className={styles.frente}>
          <div 
            className={styles.letra}
            style={{backgroundColor: corFundoLetra}}
          >
            {letra}
          </div>
          <div className={styles.valor}>
            {resposta.valor}
          </div>
        </div>
        <div className={styles.verso}>
          {resposta.certa ? (
            <div className={styles.certa}>
              <div>A resposta certa é...</div>
              <div className={styles.valor}>{resposta.valor}</div>
            </div>
          ) : (
            <div className={styles.errada}>
              <div>A resposta informada está errada...</div>
              <div className={styles.valor}>{resposta.valor}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}