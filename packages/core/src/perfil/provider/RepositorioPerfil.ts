import Perfil from "../model/Perfil";

export default interface RepositorioPerfil {
    salvar(perfil: Perfil): Promise<void>;
    buscarPorId(id: number): Promise<Perfil | null>;
    listar(): Promise<Perfil[]>;
    atualizar(perfil: Perfil): Promise<void>;
    remover(id: number): Promise<void>;
}
