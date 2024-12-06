import Permissao from '../model/Permissao';

export default interface RepositorioPermissao {
    salvar(permissao: Permissao): Promise<void>;
    buscarPorId(id: string): Promise<Permissao | null>;
    listar(): Promise<Permissao[]>;
    atualizar(permissao: Permissao): Promise<void>;
    remover(id: string): Promise<void>;
}
