import CasoDeUso from '../../shared/CasoDeUso';
import Perfil from '../model/perfil';
import RepositorioPerfil from '../provider/RepositorioPerfil';

export default class RegistrarPerfil implements CasoDeUso<Perfil, void>{
    
    constructor(private readonly repo: RepositorioPerfil){}
    
    async executar(perfil: Perfil): Promise<void> {

        const perfilExistente = await this.repo.buscarPorId(perfil.id);
        if (perfilExistente) {
            throw new Error('Perfil já existe');
        }
        await this.repo.salvar(perfil);
    
    }
}