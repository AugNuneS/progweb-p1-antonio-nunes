# Testes da API — Projeto 1 (S3)

API: Clínica Veterinária · entidades: Tutor e Pet · servidor: `npm run dev` em http://localhost:3000

| # | Método | URL | Body | Status obtido | Observação |
|---|---|---|---|---|---|
| 1 | POST | /tutores | {"nome":"Maria Souza","cpf":"111.222.333-44","telefone":"83999990000"} | 201 | Cria tutor |
| 2 | POST | /pets | {"nome":"Rex","especie":"cachorro","raca":"Labrador","tutorId":1} | 201 | Cria pet vinculado ao tutor 1 |
| 3 | GET | /pets?tutorId=1 | — | 200 | Filtro 1:N por tutor |
| 4 | GET | /pets/99 | — | 404 | Pet inexistente |
| 5 | POST | /tutores | {"nome":"João Silva","cpf":"111.222.333-44"} | 409 | Regra: CPF duplicado |
| 6 | POST | /pets | {"nome":"Nemo","especie":"peixe","tutorId":1} | 400 | Regra: espécie inválida |
| 7 | POST | /pets | {"nome":"Thor","especie":"gato","tutorId":999} | 422 | Regra: tutor não existe |
| 8 | PUT | /pets/1 | {"raca":"Golden Retriever"} | 200 | Atualiza pet |
| 9 | DELETE | /pets/1 | — | 204 | Remove pet |
