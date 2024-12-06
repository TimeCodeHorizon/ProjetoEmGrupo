# Passo-a-passo para instalar o projeto Auth

## Baixar e instalar os gerenciadores de pacotes (NPM e YARN)

### Instalando o npm
O npm (Node Package Manager) é instalado automaticamente com o Node.js. Você só precisa instalar o Node.js.

Passos:

**1. Baixe e instale o Node.js**:

  - Acesse o site oficial do [Node.js](https://nodejs.org/).
  - Escolha a versão recomendada para usuários (LTS).
  - Faça o download e siga as instruções para instalação.

**2. Verifique a instalação:**

  - Abra o terminal ou prompt de comando e execute:
```sh
node -v
```
Isso exibe a versão instalada do Node.js.
  - Verifique o npm:
```sh
npm -v
```
Isso exibe a versão instalada do npm.

##
### Instalando o Yarn
O yarn é uma alternativa ao npm, e você pode instalá-lo de diferentes formas.

**Instalação usando o npm (recomendado):**
Se o npm já estiver instalado, use-o para instalar o yarn:

```sh
npm install --global yarn
```
Depois de instalar, verifique a versão do yarn:

```sh
yarn -v
```

##
## Baixar o projeto do git para sua máquina

  1. Abra o VSCode ou terminal e escolha uma pasta no seu computador;
  
  2. Conecte-se ao git;
  
  3. Abra o terminal e escreva o comando abaixo:
```sh
git clone URL-DO-PROJETO-AUTH
```
exemplo: git clone https://github.com/TimeCodeHorizon/projeto-auth

##
## Instalando dependencias do projeto
  **1. Abra o terminal na raiz do projeto que acabou de criar;**
  
  **2. Digite o comando abaixo:**
```sh
yarn
```
ou 
```sh
yarn install
```
Espere o processo terminar. Pode demorar alguns minutos.

##
## Verificar se o projeto está rodando

Para rodar o projeto e testar se está funcionando, digite o comando no terminal na pasta raiz do projeto:
```sh
yarn run dev
```
ou
```sh
npm run dev
```
**Para o frontend - Abra o browser e digite:**
```sh
http://localhost:3000/
```
O resultado na tela é Landing Page

Para verificar se o backend está rodando, digite no browser:
```sh
http://localhost:4000/ping
```
A resposta deve ser 'pong'

Lembrando que o frontend está rodando na porta 3000 e o backend na porta 4000