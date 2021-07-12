import Titulo from "./Titulo";

interface CabecalhoProps {
    titulo: string;
    subtitulo: string;
}

export default function Layout(props: CabecalhoProps) {
    return (
        <div>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
        </div>
    )
}