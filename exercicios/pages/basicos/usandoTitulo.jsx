import Titulo from "../../components/Titulo"

export default function usandoTitulo() {
    return (
        <div>
            <Titulo 
                principal="Página de Cadastro" 
                secundario="Incluir, alterar e excluir coisas!"
            />
            <Titulo 
                principal="Página de Cadastro" 
                secundario="Incluir, alterar e excluir coisas!"
                pequeno={false}
            />
            <Titulo 
                principal="Página de Login" 
                secundario="Informe o seu e-mail e senha." 
                pequeno={true}
            />
            <Titulo
                principal="Página de Login" 
                secundario="Informe o seu e-mail e senha." 
                pequeno
            />
        </div>
    )
}