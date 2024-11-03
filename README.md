# MyProject

## Descrição
Este é um projeto de base para criar aplicações completas com backend e frontend integrados. Utilizando tecnologias modernas e ferramentas como Docker e Makefile, ele facilita a inicialização e execução de aplicações complexas de forma simples e replicável, com foco na produtividade e boas práticas de desenvolvimento.

## Tecnologias Utilizadas
- **Backend**: Node.js, Express.js, Sequelize, MySQL.
- **Frontend**: React.js.
- **Banco de Dados**: MySQL (rodando dentro de um container Docker).
- **Orquestração de Containers**: Docker, Docker Compose.
- **Automatização de Tarefas**: Makefile.

## Estrutura do Projeto
- `backend/`: Contém o código do servidor backend.
- `frontend/`: Contém o código do aplicativo frontend.
- `docker-compose.yml`: Arquivo de configuração do Docker Compose para orquestrar todos os containers.
- `Makefile`: Arquivo para automatizar tarefas comuns (subir e descer containers, etc).
- `.env`: Arquivo de configuração de variáveis de ambiente.

## Dependências
- **Docker** e **Docker Compose** precisam estar instalados na sua máquina.
- **Node.js**: Usado dentro do container, não é necessário instalá-lo localmente.
- **Make**: Para utilizar as facilidades do Makefile.

## Configuração do Ambiente
### 1. Configurar o Arquivo `.env`
Você precisa criar um arquivo `.env` na raiz do projeto para definir as variáveis de ambiente do backend e banco de dados. Um exemplo de como deve ser o seu `.env`:

```
DB_HOST=db
DB_USER=root
DB_PASSWORD=rootpassword
MYSQL_DATABASE=database
```

Este arquivo deve ser mantido privado e nunca adicionado ao repositório (ele é automaticamente ignorado pelo `.gitignore`).

### 2. Inicializar o Projeto
Para inicializar o projeto, basta utilizar o Makefile para rodar os containers Docker:

```sh
make up
```
Este comando irá fazer o build e subir todos os containers necessários para rodar o backend, frontend e o banco de dados.

### 3. Parar os Containers
Para parar e remover todos os containers e volumes associados, você pode utilizar:

```sh
make down
```

### 4. Limpar Volumes
Para remover volumes de dados do Docker e garantir um ambiente completamente limpo, você pode executar:

```sh
make clean
```

## Scripts no `package.json`
Os seguintes scripts foram adicionados ao `package.json` para facilitar o desenvolvimento:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "docker:up": "docker-compose up --build",
    "docker:down": "docker-compose down --volumes --remove-orphans",
    "docker:clean": "docker volume prune -f"
  }
}
```
- **start**: Inicializa a aplicação normalmente.
- **dev**: Inicializa a aplicação em modo de desenvolvimento com **Nodemon**.
- **docker:up**: Sobe os containers do projeto.
- **docker:down**: Para e remove os containers e volumes.
- **docker:clean**: Remove volumes do Docker.

## Uso do Makefile
O Makefile foi criado para facilitar os comandos Docker e padronizar o fluxo de desenvolvimento:

```make
up:
	docker-compose up --build

down:
	docker-compose down --volumes --remove-orphans

clean:
	docker volume prune -f
```
- **up**: Cria e inicializa os containers necessários.
- **down**: Para os containers e remove os volumes criados.
- **clean**: Remove todos os volumes do Docker que não estão em uso.

## Como Acessar a Aplicação
- **Frontend**: O React será iniciado e está disponível em `http://localhost:3000`.
- **Backend**: O servidor Node.js estará rodando em `http://localhost:5000`.

## Melhorias Futuras
- **Testes Automatizados**: Adicionar uma suite de testes para validar o backend e frontend.
- **Pipeline CI/CD**: Implementar um pipeline para automatizar os testes e o deploy.
- **Documentação mais Detalhada**: Adicionar documentação para endpoints da API (por exemplo, com Swagger).

## Contribuição
1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   ```
2. Crie uma nova branch:
   ```sh
   git checkout -b feature/nova-feature
   ```
3. Faça as alterações necessárias e faça o commit:
   ```sh
   git commit -m "Adicionando nova feature"
   ```
4. Envie suas alterações:
   ```sh
   git push origin feature/nova-feature
   ```
5. Abra um Pull Request.

## Licença
Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

