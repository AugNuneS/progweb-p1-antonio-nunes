import { contaModel } from '../models/contaModel.js';
import { clienteModel } from '../models/clienteModel.js';
import { erro } from '../utils/erro.js';

export const contaService = {
  listar(clienteId) {
    if (clienteId !== undefined) {
      return contaModel.listarPorCliente(Number(clienteId));
    }
    return contaModel.listar();
  },

  buscarPorId(id) {
    const conta = contaModel.buscarPorId(id);
    if (!conta) throw erro(404, 'Conta não encontrada');
    return conta;
  },

  criar({ tipo, saldo, clienteId } = {}) {
    if (!tipo || saldo === undefined || !clienteId) {
      throw erro(400, 'Campos "tipo", "saldo" e "clienteId" são obrigatórios');
    }
    if (!['corrente', 'poupanca'].includes(tipo)) {
      throw erro(400, 'Tipo deve ser "corrente" ou "poupanca"');
    }
    if (!clienteModel.buscarPorId(Number(clienteId))) {
      throw erro(422, 'Cliente informado não existe');
    }
    return contaModel.inserir({ tipo, saldo, clienteId });
  },

  atualizar(id, dados = {}) {
    if (dados.tipo !== undefined && !['corrente', 'poupanca'].includes(dados.tipo)) {
      throw erro(400, 'Tipo deve ser "corrente" ou "poupanca"');
    }
    const atualizada = contaModel.atualizar(id, dados);
    if (!atualizada) throw erro(404, 'Conta não encontrada');
    return atualizada;
  },

  remover(id) {
    const removida = contaModel.remover(id);
    if (!removida) throw erro(404, 'Conta não encontrada');
  },
};
