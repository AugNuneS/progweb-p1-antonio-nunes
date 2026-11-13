import { petService } from '../services/petService.js';

export const petController = {
  listar(req, res) {
    res.json(petService.listar(req.query.tutorId));
  },

  buscarPorId(req, res) {
    res.json(petService.buscarPorId(Number(req.params.id)));
  },

  criar(req, res) {
    const novo = petService.criar(req.body);
    res.status(201).json(novo);
  },

  atualizar(req, res) {
    res.json(petService.atualizar(Number(req.params.id), req.body));
  },

  remover(req, res) {
    petService.remover(Number(req.params.id));
    res.status(204).end();
  },
};
