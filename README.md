# Simple NestJS REST API Template
Uma simples template de uma REST API desenvolvida com NestJS.

# Pré-requisitos
- Node 20 ou superior
- Docker (para usa um banco de dados conteinerizado)

# Como usar
1. Primeiro instale as dependências do projeto:
    ```
    npm install
    ```
2. Crie um `.env` no diretório raíz do projeto com as seguintes propriedades:
    ```properties
    JWT_SECRET=
    # expiration time format: <number><d|h|m|s|>
    # d = days, h = hours, m = minutes, s = seconds
    JWT_EXPIRATION=
    ```
3. Inicialize o `docker-compose.yml` (opcional):
   ```
   docker compose up -d
   ```
4. Inicialize a aplicação:
   ```
   npm run start:dev
   ```