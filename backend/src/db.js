import { DatabaseSync } from 'node:sqlite';

const arquivo = process.env.DB_FILE ?? 'banco.db';
export const db = new DatabaseSync(arquivo);

db.exec('PRAGMA foreign_keys = ON;');

db.exec(`
  CREATE TABLE IF NOT EXISTS tutores (
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    nome     TEXT NOT NULL,
    cpf      TEXT NOT NULL UNIQUE,
    telefone TEXT
  );

  CREATE TABLE IF NOT EXISTS pets (
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    nome     TEXT NOT NULL,
    especie  TEXT NOT NULL CHECK (especie IN ('cachorro', 'gato', 'ave', 'roedor', 'outro')),
    raca     TEXT NOT NULL DEFAULT 'SRD',
    tutor_id INTEGER NOT NULL REFERENCES tutores(id)
  );
`);

// Dados de exemplo: inseridos apenas se o banco estiver vazio (para demo no Render).
const { total } = db.prepare('SELECT COUNT(*) AS total FROM tutores').get();
if (total === 0) {
  const t1 = db
    .prepare('INSERT INTO tutores (nome, cpf, telefone) VALUES (?, ?, ?)')
    .run('Mariana Souza', '11122233344', '83988880001');
  const t2 = db
    .prepare('INSERT INTO tutores (nome, cpf, telefone) VALUES (?, ?, ?)')
    .run('Carlos Andrade', '55566677788', '83988880002');

  db.prepare('INSERT INTO pets (nome, especie, raca, tutor_id) VALUES (?, ?, ?, ?)')
    .run('Thor', 'cachorro', 'Pinscher', t1.lastInsertRowid);
  db.prepare('INSERT INTO pets (nome, especie, raca, tutor_id) VALUES (?, ?, ?, ?)')
    .run('Luna', 'cachorro', 'Golden Retriever', t1.lastInsertRowid);
  db.prepare('INSERT INTO pets (nome, especie, raca, tutor_id) VALUES (?, ?, ?, ?)')
    .run('Mia', 'gato', 'Siamês', t2.lastInsertRowid);
}
