import { petModel } from '../models/petModel.js';
import { tutorModel } from '../models/tutorModel.js';
import { erro } from '../utils/erro.js';

const ESPECIES_VALIDAS = ['cachorro', 'gato', 'ave', 'roedor', 'outro'];

export const petService = {
  listar(tutorId) {
    if (tutorId) return petModel.listarPorTutor(Number(tutorId));
    return petModel.listar();
  },

  buscarPorId(id) {
    const pet = petModel.buscarPorId(id);
    if (!pet) throw erro(404, 'Pet não encontrado');
    return pet;
  },

  criar({ nome, especie, raca, tutorId } = {}) {
    if (!nome || !especie || !tutorId) {
      throw erro(400, 'Campos "nome", "especie" e "tutorId" são obrigatórios');
    }
    if (!ESPECIES_VALIDAS.includes(especie)) {
      throw erro(400, `Espécie deve ser uma de: ${ESPECIES_VALIDAS.join(', ')}`);
    }
    if (!tutorModel.buscarPorId(Number(tutorId))) {
      throw erro(422, 'Tutor informado não existe');
    }
    return petModel.inserir({ nome, especie, raca, tutorId });
  },

  atualizar(id, dados = {}) {
    if (dados.especie && !ESPECIES_VALIDAS.includes(dados.especie)) {
      throw erro(400, `Espécie deve ser uma de: ${ESPECIES_VALIDAS.join(', ')}`);
    }
    const atualizado = petModel.atualizar(id, dados);
    if (!atualizado) throw erro(404, 'Pet não encontrado');
    return atualizado;
  },

  remover(id) {
    const removido = petModel.remover(id);
    if (!removido) throw erro(404, 'Pet não encontrado');
  },
};
