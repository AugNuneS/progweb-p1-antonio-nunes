import { api } from '../api.js';

const ESPECIES = ['cachorro', 'gato', 'ave', 'roedor', 'outro'];

function preparar({ nome, especie, raca, tutorId }) {
  if (!tutorId) throw new Error('Selecione o tutor.');
  const nomeLimpo = (nome ?? '').trim();
  if (!nomeLimpo) throw new Error('Informe o nome do pet.');
  if (!ESPECIES.includes(especie)) throw new Error('Espécie inválida.');

  return {
    nome: nomeLimpo,
    especie,
    raca: (raca ?? '').trim() || null,
    tutorId: Number(tutorId),
  };
}

export const petService = {
  listar() {
    return api.get('/pets');
  },

  async criar(dados) {
    return api.post('/pets', preparar(dados));
  },

  async atualizar(id, dados) {
    return api.put(`/pets/${id}`, preparar(dados));
  },

  remover(id) {
    return api.delete(`/pets/${id}`);
  },
};
