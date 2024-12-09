import CasoDeUso from "../../shared/CasoDeUso";
import Permissao from "../model/Permissao";
import RepositorioPermissao from "../provider/RepositorioPermissao";

type Entrada = {
    id: number; // Id do permissao a ser pesquisada
}

export default class ObterPermissao implements CasoDeUso<Entrada, Permissao>{
    
    constructor(
        private readonly repo: RepositorioPermissao // Repositório de permissao
    ){}
    
    async executar(entrada: Entrada): Promise<Permissao> {
        const { id } = entrada
        const permissao = await this.repo.buscarPorId(id);

        if(!permissao){
            throw new Error("Essa permissão não existe");
        }
        return permissao;
    }
}