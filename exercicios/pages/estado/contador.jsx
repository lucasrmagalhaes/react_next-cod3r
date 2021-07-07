import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {
    const [numero, setNumero] = useState(0)

    const dec = () => setNumero(numero - 1)
    const inc = () => setNumero(numero + 1)

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <h1>Contador</h1>
            <ContadorDisplay numero={numero} />
            <div>
                <button onClick={dec}>-</button>
                <button onClick={inc}>+</button>
            </div>
        </div>
    )
}