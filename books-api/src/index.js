require('dotenv').config();

const express = require('express');
const booksRouter = require('./api/books/router');
const ClientError = require('./exceptions/ClientError');

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api/v1/books', booksRouter);

app.use((error, request, response, next) => {
  if (error instanceof ClientError) {
    return response.status(error.statusCode).json({
      status: 'fail',
      message: error.message,
    });
  }

  console.log(error);
  response.status(500);
  return next();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
