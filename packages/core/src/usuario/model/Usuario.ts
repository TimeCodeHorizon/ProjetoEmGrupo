import { Perfil } from "../../perfil";

export default interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha?: string;
    telefone?: string;
    ativo: boolean;
    perfis?: Perfil[];                  // Relação com perfis
    tokenRecuperacaoSenha?: string;    // Token temporário para recuperação
    expiraTokenRecuperacao?: Date;
    doisFatoresAtivo: boolean;         // Indica se 2FA está ativo
    imagemPerfil?: string;             // URL da imagem de perfil
    criadoEm: Date;
}
