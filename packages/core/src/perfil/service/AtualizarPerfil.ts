import CasoDeUso from "../../shared/CasoDeUso";
import Perfil from "../model/perfil";
import RepositorioPerfil from "../provider/RepositorioPerfil";

type Entrada = {
    id: string;
    nome: string;
    descricao: string;
    ativo: boolean;
}

export default class AtualizarPerfil implements CasoDeUso<Entrada, Perfil>{
    
    constructor(
        private readonly repo: RepositorioPerfil
    ){}
    
    async executar(entrada: Entrada): Promise<Perfil> {
        const {id, nome, descricao, ativo} = entrada

        const perfil = await this.repo.buscarPorId(id)

        if(!perfil){
            throw new Error('Perfil não encontrado')
        }

        const perfilAtualizado = { ...perfil, nome: nome, descricao: descricao, ativo: ativo}
        await this.repo.atualizar(perfilAtualizado)
        
        return perfilAtualizado
    }





}