import Perfil from "../model/perfil";

export default interface RepositorioPerfil {
    salvar(perfil: Perfil): Promise<void>;
    buscarPorId(id: string): Promise<Perfil | null>;
    listar(): Promise<Perfil[]>;
    atualizar(perfil: Perfil): Promise<void>;
    remover(id: string): Promise<void>;
}
