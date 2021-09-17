import Link from 'next/link';

import styles from '../styles/Botao.module.css';

interface BotaoProps {
  texto: string;
  href?: string;
  onClick?: (evento: any) => void; 
}

export default function Botao({ texto, href, onClick }: BotaoProps) {
  function renderizarBotao() {
    return (
      <button 
        className={styles.botao}
        onClick={onClick}
      >
        {texto}
      </button>
    )
  }
  
  return href ? (
    <Link href={href}>
      {renderizarBotao()}
    </Link>
  ) : renderizarBotao();
}