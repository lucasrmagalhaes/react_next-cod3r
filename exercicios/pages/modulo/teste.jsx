import Padrao, { Comp1 as BlaBlaBla, Comp2, Comp4, Comp5, Comp6 } from "../../components/modulo/funcionais"

export default function teste() {
    return (
        <div>
            <BlaBlaBla />
            <Comp2 />
            <Padrao />
            <Comp4 />
            <Comp5 />
            <Comp6 msg="Legal!!" />
        </div>
    )
}