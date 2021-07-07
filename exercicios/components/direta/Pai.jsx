import Filho from "./Filho"

export default function Pai(props) {
    return (
        <div>
            <h1>Família {props.familia}</h1>
            <Filho nome="Lucas" familia="Albuquerque" />
            <Filho nome="Deborah" familia="Magalhães" />
            <Filho nome="Marcelo" familia="Garcia" />
            <Filho nome="Gabriel" {...props} />
            <Filho {...props} nome="Gabriel" />
        </div>
    )
}