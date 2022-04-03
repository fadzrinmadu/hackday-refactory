/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('books', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    isbn: {
      type: 'TEXT',
      notNull: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    author: {
      type: 'TEXT',
      notNull: true,
    },
    summary: {
      type: 'TEXT',
      notNull: true,
    },
    year: {
      type: 'TEXT',
      notNull: true,
    },
    publisher: {
      type: 'TEXT',
      notNull: true,
    },
    created_at: {
      type: 'TEXT',
      notNull: true,
    },
    updated_at: {
      type: 'TEXT',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('books');
};
