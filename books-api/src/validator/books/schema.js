const Joi = require('joi');

const BookPayloadSchema = Joi.object({
  isbn: Joi.string().required(),
  name: Joi.string().required(),
  author: Joi.string().required(),
  summary: Joi.string().required(),
  year: Joi.number().required(),
  publisher: Joi.string().required(),
});

module.exports = { BookPayloadSchema };
