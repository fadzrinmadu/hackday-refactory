const booksService = require('./service');
const { validateBookPayload } = require('../../validator/books');

exports.postBookHandler = async (request, response, next) => {
  try {
    validateBookPayload(request.body);

    const payload = request.body;

    const bookId = await booksService.addBook(payload);

    return response.status(201).json({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId,
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.getBooksHandler = async (request, response, next) => {
  try {
    const books = await booksService.getNotes();

    return response.status(200).json({
      status: 'success',
      data: {
        books,
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.getBookByIdHandler = async (request, response, next) => {
  try {
    const { id } = request.params;

    const book = await booksService.getNoteById(id);

    return response.status(200).json({
      status: 'success',
      data: {
        book,
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.putBookByIdHandler = async (request, response, next) => {
  try {
    validateBookPayload(request.body);

    const { id } = request.params;
    const payload = request.body;

    await booksService.editBookById(id, payload);

    return response.status(200).json({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
  } catch (error) {
    return next(error);
  }
};

exports.deleteBookByIdHandler = async (request, response, next) => {
  try {
    const { id } = request.params;

    await booksService.deleteBookById(id);

    return response.status(200).json({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
  } catch (error) {
    return next(error);
  }
};
