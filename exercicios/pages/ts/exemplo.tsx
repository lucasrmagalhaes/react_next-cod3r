import Pessoa from "../../components/Pessoa"

export default function exemploTS() {
    return (
        <div>
            <Pessoa nome="Lucas" idade={28} />
            <Pessoa nome="Maria" />
        </div>
    )
}