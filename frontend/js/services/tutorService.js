import { api } from '../api.js';

function preparar({ nome, cpf, telefone }) {
  const dados = {
    nome: (nome ?? '').trim(),
    cpf: (cpf ?? '').replace(/\D/g, ''),
    telefone: (telefone ?? '').trim() || null,
  };
  if (!dados.nome) throw new Error('Informe o nome do tutor.');
  if (dados.cpf.length !== 11) throw new Error('O CPF precisa ter 11 dígitos.');
  return dados;
}

export const tutorService = {
  listar() {
    return api.get('/tutores');
  },

  async criar(dados) {
    return api.post('/tutores', preparar(dados));
  },

  async atualizar(id, dados) {
    return api.put(`/tutores/${id}`, preparar(dados));
  },

  remover(id) {
    return api.delete(`/tutores/${id}`);
  },
};
