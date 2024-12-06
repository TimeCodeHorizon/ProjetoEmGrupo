import CasoDeUso from "../../shared/CasoDeUso";
import Perfil from "../model/perfil";
import RepositorioPerfil from "../provider/RepositorioPerfil";

type Entrada = {
    id: string; // Id do perfil a ser excluído
}

export default class ExcluirPerfil implements CasoDeUso<Entrada,void>{
    
    constructor(

        private readonly repo: RepositorioPerfil // Repositório de perfis
        
    ){}
    
    async executar(entrada: Entrada): Promise<void> {
        const { id } = entrada
        const perfil = await this.repo.buscarPorId(id);
        
        if(!perfil){
            throw new Error("Perfil não encontrado");
        }

        await this.repo.remover(id)
    }



    
}