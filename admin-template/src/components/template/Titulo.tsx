interface TituloProps {
    titulo: string;
    subtitulo: string;
}

export default function Layout(props: TituloProps) {
    return (
        <div>
            <h1 className={`

            `}>{props.titulo}</h1>
            <h2 className={`
            
            `}>{props.subtitulo}</h2>
        </div>
    )
}