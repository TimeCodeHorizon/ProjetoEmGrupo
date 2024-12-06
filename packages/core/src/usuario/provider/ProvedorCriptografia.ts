export default interface ProvedorCriptografia {
    criptografar(senha: string): Promise<string>;
    comparar(senha: string, hash: string): Promise<boolean>;
}
