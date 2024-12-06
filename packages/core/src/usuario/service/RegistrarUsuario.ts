import Usuario from '../model/Usuario';
import RepositorioUsuario from '../provider/RepositorioUsuario';
import ProvedorCriptografia from '../provider/ProvedorCriptografia';
import CasoDeUso from '../../shared/CasoDeUso';

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {
    constructor(
        private readonly repositorio: RepositorioUsuario,
        private readonly cripto: ProvedorCriptografia
    ) {}

    async executar(usuario: Usuario): Promise<void> {
        const usuarioExistente = await this.repositorio.buscarPorEmail(usuario.email);
        if (usuarioExistente) {
            throw new Error('Usuário já existe');
        }

        const senhaCriptografada = await this.cripto.criptografar(usuario.senha!);
        
        const novoUsuario = { ...usuario, senha: senhaCriptografada };
        
        await this.repositorio.salvar(novoUsuario);
    }
}
