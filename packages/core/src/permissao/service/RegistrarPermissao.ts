import CasoDeUso from '../../shared/CasoDeUso';
import Permissao from '../model/Permissao';
import RepositorioPermissao from '../provider/RepositorioPermissao';

export default class RegistrarPermissao implements CasoDeUso<Permissao, void>{
    
    constructor(private readonly repo: RepositorioPermissao){}
    
    async executar(permissao: Permissao): Promise<void> {
        let permissaoExistente;
        
        if(permissao.id)
            permissaoExistente = await this.repo.buscarPorId(permissao.id);
        
        if (permissaoExistente) {
            throw new Error('Permissão já existe');
        }
        
        await this.repo.salvar(permissao);
    
    }
}