import Usuario from '../model/Usuario';

export default interface RepositorioUsuario {
    salvar(usuario: Usuario): Promise<void>;
    buscarPorEmail(email: string): Promise<Usuario | null>;
    buscarPorId(id: string): Promise<Usuario | null>;
}
