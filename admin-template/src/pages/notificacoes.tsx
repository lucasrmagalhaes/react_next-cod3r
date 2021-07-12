import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

export default function Notificacoes() {
  const ctx = useAppData()

  return (
    <Layout
      titulo="Notificações"
      subtitulo="Aqui você irá gerenciar suas notificações!"
    >
      <h3>{ctx.nome}</h3>
    </Layout>
  )
}
