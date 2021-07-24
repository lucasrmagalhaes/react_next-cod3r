import Porta from "../components/Porta"
import PortaModel from "../model/porta"

export default function Home() {
  const p1 = new PortaModel(1, false, true)
  const p2 = new PortaModel(2)

  return (
    <div style={{ display: 'flex' }}>
      <Porta porta={p1} />
      <Porta porta={p2} />
    </div>
  )
}
