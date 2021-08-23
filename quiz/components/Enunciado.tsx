import styles from '../styles/Enunciado.module.css';

interface EnunciadoProps {
  texto: string;
}

export default function Enunciado({ texto }: EnunciadoProps) {
  return (
    <div className={styles.enunciado}>
      <span className={styles.texto}>{texto}</span>
    </div>
  )
}