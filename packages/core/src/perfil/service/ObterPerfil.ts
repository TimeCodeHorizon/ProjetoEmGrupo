import CasoDeUso from "../../shared/CasoDeUso";
import Perfil from "../model/Perfil";
import RepositorioPerfil from "../provider/RepositorioPerfil";

type Entrada = {
    id: number; // Id do permissao a ser pesquisada
}

export default class ObterPerfil implements CasoDeUso<Entrada, Perfil>{
    
    constructor(
        private readonly repo: RepositorioPerfil // Repositório de perfil
    ){}
    
    async executar(entrada: Entrada): Promise<Perfil> {
        const { id } = entrada
        const perfil = await this.repo.buscarPorId(id);

        if(!perfil){
            throw new Error("Esse perfil não existe");
        }
        return perfil;
    }
}