-- CreateTable
CREATE TABLE "usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT,
    "ativo" BOOLEAN NOT NULL,
    "tokenRecuperacaoSenha" TEXT NOT NULL,
    "expiraTokenRecuperacao" DATETIME NOT NULL,
    "doisFatoresAtivo" BOOLEAN NOT NULL,
    "imagemPerfil" TEXT,
    "criadoEm" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "perfis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "ativo" BOOLEAN NOT NULL,
    "criadoEm" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "permissoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "ativo" BOOLEAN NOT NULL,
    "criadoEm" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_PerfilToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PerfilToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "perfis" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PerfilToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "usuarios" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PerfilToPermissao" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PerfilToPermissao_A_fkey" FOREIGN KEY ("A") REFERENCES "perfis" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PerfilToPermissao_B_fkey" FOREIGN KEY ("B") REFERENCES "permissoes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_PerfilToUsuario_AB_unique" ON "_PerfilToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_PerfilToUsuario_B_index" ON "_PerfilToUsuario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PerfilToPermissao_AB_unique" ON "_PerfilToPermissao"("A", "B");

-- CreateIndex
CREATE INDEX "_PerfilToPermissao_B_index" ON "_PerfilToPermissao"("B");
