import Permissao from "./model/Permissao";
import RepositorioPermissao from "./provider/RepositorioPermissao";
import AtualizarPermissao from "./service/AtualizarPermissao";
import ExcluirPermissao from "./service/ExcluirPermissao";
import ObterTodasPermissao from "./service/ObterTodasPermissao";
import RegistrarPermissao from "./service/RegistrarPermissao";
import ObterPermissao from "./service/ObterPermissao";

export type { Permissao, RepositorioPermissao }
export { AtualizarPermissao, ExcluirPermissao, ObterTodasPermissao, RegistrarPermissao, ObterPermissao };