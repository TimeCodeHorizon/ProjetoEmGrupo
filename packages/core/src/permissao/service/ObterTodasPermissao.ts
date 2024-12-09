import CasoDeUso from "../../shared/CasoDeUso";
import Permissao from "../model/Permissao";
import RepositorioPermissao from "../provider/RepositorioPermissao";

export default class ObterTodosPermissao implements CasoDeUso<void, Permissao[]>{
    
    constructor(
        private readonly repo: RepositorioPermissao // Repositório de Permissao
    ){}
    
    async executar(entrada: void): Promise<Permissao[]> {
        return await this.repo.listar();  // Retorna uma lista de Permissao
    }

}