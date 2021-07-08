export function getStaticPaths() {
    return {
        fallback: false, // 404
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
        ]
    }
}

export function getStaticProps() {
    return {
        props: {}
    }
}

export default function AlunoPorId() {
    return (
        <div>
            <h1>Detalhes do Aluno</h1>
        </div>
    )
}