import CasoDeUso from '../../shared/CasoDeUso';
import Permissao from '../model/Permissao';
import RepositorioPermissao from '../provider/RepositorioPermissao';

export default class RegistrarPermissao implements CasoDeUso<Permissao, void>{
    
    constructor(private readonly repo: RepositorioPermissao){}
    
    async executar(permissao: Permissao): Promise<void> {

        const perfilExistente = await this.repo.buscarPorId(permissao.id);
        
        if (perfilExistente) {
            throw new Error('Permissão já existe');
        }
        
        await this.repo.salvar(permissao);
    
    }
}