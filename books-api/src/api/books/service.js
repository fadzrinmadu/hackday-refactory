const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const { mapDBToModel } = require('../../utils');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

const {
  ADD_BOOK_QUERY,
  GET_BOOKS_QUERY,
  GET_BOOK_DETAIL_QUERY,
  UPDATE_BOOK_QUERY,
  DELETE_BOOK_QUERY,
} = require('../../queries');

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
    text: ADD_BOOK_QUERY,
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
    text: GET_BOOKS_QUERY,
  };

  const result = await pool.query(query);
  const mappedResult = result.rows.map(mapDBToModel);

  return mappedResult;
};

exports.getNoteById = async (id) => {
  const query = {
    text: GET_BOOK_DETAIL_QUERY,
    values: [id],
  };

  const result = await pool.query(query);

  if (!result.rows.length) {
    throw new NotFoundError('Gagal mendapatkan buku. Id tidak ditemukan');
  }

  const mappedResult = result.rows.map(mapDBToModel)[0];

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

  const query = {
    text: UPDATE_BOOK_QUERY,
    values: [isbn, name, author, summary, year, publisher, updatedAt, id],
  };

  const result = await pool.query(query);

  if (!result.rows.length) {
    throw new NotFoundError('Gagal memperbarui buku. Id tidak ditemukan');
  }
};

exports.deleteBookById = async (id) => {
  const query = {
    text: DELETE_BOOK_QUERY,
    values: [id],
  };

  const result = await pool.query(query);

  if (!result.rows.length) {
    throw new NotFoundError('Gagal menghapus buku. Id tidak ditemukan');
  }
};
