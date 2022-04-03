const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const { mapDBToModel } = require('../../utils');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

const pool = new Pool();

exports.addBook = async (payload) => {
  const {
    isbn,
    name,
    author,
    summary,
    year,
    publisher,
  } = payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const queryText = `
    INSERT INTO books
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING id
  `;

  const newBook = [
    id,
    isbn,
    name,
    author,
    summary,
    year,
    publisher,
    createdAt,
    updatedAt,
  ];

  const query = {
    text: queryText,
    values: newBook,
  };

  const result = await pool.query(query);

  if (!result.rows[0].id) {
    throw new InvariantError('Buku gagal ditambahkan');
  }

  return result.rows[0].id;
};

exports.getNotes = async () => {
  const query = {
    text: 'SELECT * FROM books',
  };

  const result = await pool.query(query);
  const mappedResult = result.rows.map(mapDBToModel);

  return mappedResult;
};

exports.editBookById = async (id, payload) => {
  const {
    isbn,
    name,
    author,
    summary,
    year,
    publisher,
  } = payload;

  const updatedAt = new Date().toISOString();

  const queryText = `
    UPDATE books
    SET isbn = $1, name = $2,
      author = $3, summary = $4,
      year = $5, publisher = $6,
      updated_at = $7
    WHERE id = $8
    RETURNING id
  `;

  const query = {
    text: queryText,
    values: [isbn, name, author, summary, year, publisher, updatedAt, id],
  };

  const result = await pool.query(query);

  if (!result.rows.length) {
    throw new NotFoundError('Gagal memperbarui buku. Id tidak ditemukan');
  }
};

exports.deleteBookById = async (id) => {
  const query = {
    text: 'DELETE FROM books WHERE id = $1 RETURNING id',
    values: [id],
  };

  const result = await pool.query(query);

  if (!result.rows.length) {
    throw new NotFoundError('Gagal menghapus buku. Id tidak ditemukan');
  }
};
