import { useRouter } from 'next/router'
import Link from 'next/link'

export default function params() {
    const router = useRouter()
    // console.log(router)
    const id = router.query.id
    const nome = router.query.nome

    return (
        <div>
            {/* http://localhost:3000/rotas/params?id=123&nome=Lucas */}
            <h1>Rotas Params: {id} e {nome}</h1>
            <Link href="/rotas" passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}