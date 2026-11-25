import { db } from '../db.js';

export const tutorModel = {
  listar() {
    return db.prepare('SELECT * FROM tutores ORDER BY id').all();
  },

  buscarPorId(id) {
    return db.prepare('SELECT * FROM tutores WHERE id = ?').get(id) ?? null;
  },

  existeCpf(cpf) {
    const linha = db.prepare('SELECT 1 FROM tutores WHERE cpf = ?').get(cpf);
    return linha !== undefined;
  },

  inserir({ nome, cpf, telefone }) {
    const r = db
      .prepare('INSERT INTO tutores (nome, cpf, telefone) VALUES (?, ?, ?)')
      .run(nome, cpf, telefone ?? null);
    return this.buscarPorId(r.lastInsertRowid);
  },

  atualizar(id, dados) {
    const atual = this.buscarPorId(id);
    if (!atual) return null;
    const novo = { ...atual, ...dados };
    db.prepare('UPDATE tutores SET nome = ?, cpf = ?, telefone = ? WHERE id = ?')
      .run(novo.nome, novo.cpf, novo.telefone ?? null, id);
    return this.buscarPorId(id);
  },

  remover(id) {
    const r = db.prepare('DELETE FROM tutores WHERE id = ?').run(id);
    return r.changes > 0;
  },
};
