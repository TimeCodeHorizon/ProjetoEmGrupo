import CasoDeUso from "../../shared/CasoDeUso";
import Perfil from "../model/perfil";
import RepositorioPerfil from "../provider/RepositorioPerfil";

export default class ObterTodosPerfil implements CasoDeUso<void, Perfil[]>{
    
    constructor(

        private readonly repo: RepositorioPerfil // Repositório de perfis
        
    ){}
    
    async executar(entrada: void): Promise<Perfil[]> {
        return await this.repo.listar();  // Retorna uma lista de perfis
    }

}