import { useState } from "react"
import Porta from "../components/Porta"
import { criarPortas } from "../functions/portas"
import PortaModel from "../model/porta"

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))

  console.log(criarPortas(3, 2))

  return (
    <div style={{ display: 'flex' }}>
      <Porta porta={p1} onChange={novaPorta => setP1(novaPorta)} />
    </div>
  )
}
