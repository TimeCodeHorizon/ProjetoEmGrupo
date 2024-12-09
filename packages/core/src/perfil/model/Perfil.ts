import { Permissao } from "../../permissao";

export default interface Perfil {
    id: number;
    nome: string;
    descricao?: string;
    permissoes?: Permissao[];           // Relação com permissões
    ativo: boolean;
    criadoEm: Date;
}
