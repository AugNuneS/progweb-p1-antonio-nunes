# Telas do Projeto 1 (S4)

Front: `npx http-server -p 5500 -c-1` em `frontend/` · API: `npm run dev` em `backend/`

| Lista | Estado | Como provocar | O que aparece |
|---|---|---|---|
| Tutores | carregando | DevTools → Network → throttling 3G → F5 | spinner "Carregando tutores…" |
| Tutores | vazio | API recém-iniciada sem cadastros | "Nenhum tutor ainda. Cadastre o primeiro no formulário." |
| Tutores | erro | Ctrl+C no terminal da API → F5 | "Não consegui falar com a API. Ela está rodando?" + botão "Tentar de novo" |
| Tutores | sucesso | Cadastrar tutor com nome e CPF de 11 dígitos | Tabela com os dados do tutor e botões Editar / Remover |
| Tutores | erro de regra (409) | Cadastrar outro tutor com o mesmo CPF já existente | Aviso vermelho: "Já existe um tutor cadastrado com este CPF" |
| Pets | carregando | DevTools → Network → throttling 3G → F5 | spinner "Carregando pets…" |
| Pets | vazio | API recém-iniciada sem pets | "Nenhum pet ainda. Cadastre um tutor e registre o primeiro pet." |
| Pets | erro | Ctrl+C no terminal da API → F5 | "Não consegui falar com a API. Ela está rodando?" + botão "Tentar de novo" |
| Pets | sucesso | Selecionar tutor no `<select>` e cadastrar pet | Tabela mostrando o nome do tutor, pet, espécie e raça |
| Pets | erro de regra (422) | Remover o tutor em outra aba antes de cadastrar um pet para ele | Aviso vermelho: "Tutor informado não existe" |

## Camadas
- api: `js/api.js` · services: `js/services/` · state: `js/state/store.js` · ui: `js/ui/` · ponto de entrada: `js/main.js`
