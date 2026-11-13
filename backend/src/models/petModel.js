let pets = [];
let proximoId = 1;

export const petModel = {
  listar() {
    return pets;
  },

  listarPorTutor(tutorId) {
    return pets.filter((p) => p.tutorId === tutorId);
  },

  buscarPorId(id) {
    return pets.find((p) => p.id === id) ?? null;
  },

  inserir({ nome, especie, raca, tutorId }) {
    const novo = {
      id: proximoId++,
      nome,
      especie,
      raca: raca ?? 'SRD',
      tutorId: Number(tutorId),
    };
    pets.push(novo);
    return novo;
  },

  atualizar(id, dados) {
    const i = pets.findIndex((p) => p.id === id);
    if (i === -1) return null;
    pets[i] = { ...pets[i], ...dados, id };
    return pets[i];
  },

  remover(id) {
    const antes = pets.length;
    pets = pets.filter((p) => p.id !== id);
    return pets.length < antes;
  },
};
