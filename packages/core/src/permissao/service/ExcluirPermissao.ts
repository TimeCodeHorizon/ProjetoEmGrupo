import CasoDeUso from "../../shared/CasoDeUso";
import RepositorioPermissao from "../provider/RepositorioPermissao";

type Entrada = {
    id: number; // Id do perfil a ser excluído
}

export default class ExcluirPermissao implements CasoDeUso<Entrada,void>{
    
    constructor(

        private readonly repo: RepositorioPermissao // Repositório de permissao
        
    ){}
    
    async executar(entrada: Entrada): Promise<void> {
        const { id } = entrada
        const permissao = await this.repo.buscarPorId(id);

        if(!permissao){
            throw new Error("Permissão não encontrada");
        }

        await this.repo.remover(id)
    }
}