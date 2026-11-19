import { tutorModel } from '../models/tutorModel.js';
import { erro } from '../utils/erro.js';

export const tutorService = {
  listar() {
    return tutorModel.listar();
  },

  buscarPorId(id) {
    const tutor = tutorModel.buscarPorId(id);
    if (!tutor) throw erro(404, 'Tutor não encontrado');
    return tutor;
  },

  criar({ nome, cpf, telefone } = {}) {
    if (!nome || !cpf) throw erro(400, 'Campos "nome" e "cpf" são obrigatórios');
    if (tutorModel.existeCpf(cpf)) throw erro(409, 'Já existe um tutor cadastrado com este CPF');
    return tutorModel.inserir({ nome, cpf, telefone });
  },

  atualizar(id, dados = {}) {
    const atualizado = tutorModel.atualizar(id, dados);
    if (!atualizado) throw erro(404, 'Tutor não encontrado');
    return atualizado;
  },

  remover(id) {
    const removido = tutorModel.remover(id);
    if (!removido) throw erro(404, 'Tutor não encontrado');
  },
};
