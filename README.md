# Clínica Veterinária — Gestão de Tutores e Pets

Sistema web fullstack para cadastro e gerenciamento de tutores e seus pets em uma clínica veterinária.
Projeto 1 da disciplina Programação Web (UEPB, 2026.2).

- **Aplicação:** (preencher após deploy na Vercel)
- **API:** (preencher após deploy no Render)
- **Vídeo de apresentação:** (preencher após gravação)

> A API está no plano grátis do Render: o primeiro acesso pode levar cerca de
> um minuto, e os dados voltam aos de exemplo a cada reinício do serviço.

## Tecnologias

- **Backend:** Node.js 22, Express 5, SQLite (node:sqlite, SQL puro com queries parametrizadas)
- **Frontend:** HTML, CSS, Bootstrap 5, JavaScript puro (ES Modules, fetch)

## Como rodar localmente

Pré-requisito: Node.js 22 ou superior.

    # 1. API
    cd backend
    npm install
    cp .env.example .env
    npm run dev                      # http://localhost:3000

    # 2. Frontend (em outro terminal)
    cd frontend
    npx http-server -p 5500 -c-1     # http://localhost:5500

## Rotas da API

| Método | Rota | O que faz | Respostas |
|---|---|---|---|
| GET | `/` | Health check da API | 200 |
| GET | `/tutores` | Lista os tutores cadastrados | 200 |
| POST | `/tutores` | Cadastra um novo tutor | 201, 400, 409 |
| GET | `/tutores/:id` | Busca um tutor pelo ID | 200, 404 |
| PUT | `/tutores/:id` | Atualiza dados de um tutor | 200, 404 |
| DELETE | `/tutores/:id` | Remove um tutor (sem pets vinculados) | 204, 404, 409 |
| GET | `/pets` | Lista os pets (aceita `?tutorId=`) | 200 |
| POST | `/pets` | Cadastra um novo pet | 201, 400, 422 |
| GET | `/pets/:id` | Busca um pet pelo ID | 200, 404 |
| PUT | `/pets/:id` | Atualiza dados de um pet | 200, 400, 404 |
| DELETE | `/pets/:id` | Remove um pet | 204, 404 |

Erros seguem o formato `{"erro": "mensagem"}`.

## Regras de negócio

- **Tutor — Campos obrigatórios (`400`):** `nome` e `cpf` são obrigatórios no cadastro.
- **Tutor — CPF único (`409`):** não é permitido cadastrar dois tutores com o mesmo CPF.
- **Tutor — Integridade referencial (`409`):** não é permitido remover um tutor que possua pets cadastrados.
- **Pet — Campos obrigatórios (`400`):** `nome`, `especie` e `tutorId` são obrigatórios.
- **Pet — Espécie válida (`400`):** aceita apenas `cachorro`, `gato`, `ave`, `roedor` ou `outro`.
- **Pet — Existência do tutor (`422`):** o `tutorId` informado deve corresponder a um tutor existente.

## Estrutura

    backend/
      src/
        routes/        mapeia URL -> controller
        controllers/   lê a requisição, chama o service, responde
        services/      regras de negócio
        models/        acesso ao banco (SQLite)
        middleware/    logger e tratamento de erros
        db.js          conexão, schema e dados de exemplo do SQLite
    frontend/
      js/
        api.js         camada HTTP (fetch)
        config.js      endereço da API (local / produção)
        services/      limpeza e validação no cliente
        state/         store reativo da tela
        ui/            renderização segura no DOM
    MODELAGEM.md       modelagem de classes (S2)
    s1/ ... s4/        exercícios das semanas

## Autor

Antonio Augusto Ramalho Nunes · Ciência da Computação · UEPB
