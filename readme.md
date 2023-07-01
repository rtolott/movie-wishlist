# Link Workspace Postman
https://www.postman.com/altimetry-specialist-13032800/workspace/tsi-an/collection/22841172-9cc695b1-2ad0-4f93-9b5b-eef5953de2ea?action=share&creator=22841172

# Pré-requisitos para execução: 
* Docker deve estar instalado no Sistema Operacional

# Passo a passo para execução

1. Realizar o push do repositório Github na máquina local
2. Instalar o servidor node: `npm install`
3. Instalar o container **mysql:5.7** : `docker run -e MYSQL_ROOT_PASSWORD=root mysql:5.7`
4. Acessar o diretório **\backend** : `cd .\backend`
5. Alterar o arquivo **.env.example** com as informações do seu banco de dados e alterar para .env
6. Executar as queries presentes no arquivo **database.sql**
7. Executar o servidor node: `npm run dev`

# Autor 
`Raul de Souza Tolotti`

# Área de Atuação 
O serviço estará atuando em área de desenvolvimento de aplicativos pessoais.

# Público Alvo 
São todos os desenvolvedores interessadas em criar aplicações para filmes.

# Objetivos 
Servir como serviço back-end de um aplicativo web e mobile focado em criar listas de filmes.

* Gerenciamento do cadastro de usuários
* Controle e gestão das listas de filmes
* Controle e gestão de filmes
* Acesso ao acervo de filmes de parceiro para auxiliar no cadastro de filmes na base de dados

# Funcionamento 
O acesso ao backend poderá ser feito através do link do GitHub acima, e o desenvolvimento do front ficará à responsabilidade do desenvolvedor, o serviço de listas é autenticado, os demais serviços de filmes e usuário por enquanto estão publicas.
