import { Permissao } from "../../permissao";

export default interface Perfil {
    id: string;
    nome: string;
    descricao?: string;
    permissoes?: Permissao[];           // Relação com permissões
    ativo: boolean;
    criadoEm: Date;
}
