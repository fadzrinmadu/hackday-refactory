const queries = {
  ADD_BOOK_QUERY: 'INSERT INTO books VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id',
  GET_BOOKS_QUERY: 'SELECT * FROM books',
  GET_BOOK_DETAIL_QUERY: 'SELECT * FROM books WHERE id = $1',
  UPDATE_BOOK_QUERY: 'UPDATE books SET isbn = $1, name = $2, author = $3, summary = $4, year = $5, publisher = $6, updated_at = $7 WHERE id = $8 RETURNING id',
  DELETE_BOOK_QUERY: 'DELETE FROM books WHERE id = $1 RETURNING id',
};

module.exports = queries;
