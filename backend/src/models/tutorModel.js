let tutores = [];
let proximoId = 1;

export const tutorModel = {
  listar() {
    return tutores;
  },

  buscarPorId(id) {
    return tutores.find((t) => t.id === id) ?? null;
  },

  existeCpf(cpf) {
    return tutores.some((t) => t.cpf === cpf);
  },

  inserir({ nome, cpf, telefone }) {
    const novo = { id: proximoId++, nome, cpf, telefone: telefone ?? null };
    tutores.push(novo);
    return novo;
  },

  atualizar(id, dados) {
    const i = tutores.findIndex((t) => t.id === id);
    if (i === -1) return null;
    tutores[i] = { ...tutores[i], ...dados, id };
    return tutores[i];
  },

  remover(id) {
    const antes = tutores.length;
    tutores = tutores.filter((t) => t.id !== id);
    return tutores.length < antes;
  },
};
