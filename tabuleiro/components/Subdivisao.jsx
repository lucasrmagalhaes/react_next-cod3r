import styles from '../styles/Subdivisao.module.css'

export default function Subdivisao(props) {
    return (
        <div 
            style={{
                backgroundColor: props.preta ? "#000" : "#FFF",
            }}
            className={styles.subdivisao}>
        </div>
    )
}