import CasoDeUso from "../../shared/CasoDeUso";
import Permissao from "../model/Permissao";
import RepositorioPermissao from "../provider/RepositorioPermissao";

type Entrada = {
    id: number;
    nome: string;
    descricao: string;
    ativo: boolean;
}

export default class AtualizarPermissao implements CasoDeUso<Entrada, Permissao>{
    
    constructor(
        private readonly repo: RepositorioPermissao
    ){}
    
    async executar(entrada: Entrada): Promise<Permissao> {
        const {id, nome, descricao, ativo} = entrada

        const Permissao = await this.repo.buscarPorId(id)

        if(!Permissao){
            throw new Error('Permissão não encontrada')
        }

        const permissaoAtualizado = { ...Permissao, nome: nome, descricao: descricao, ativo: ativo}
        await this.repo.salvar(permissaoAtualizado)
        
        return permissaoAtualizado
    }





}