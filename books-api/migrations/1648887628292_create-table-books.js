/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('books', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    isbn: {
      type: 'VARCHAR(13)',
      notNull: true,
    },
    name: {
      type: 'VARCHAR(100)',
      notNull: true,
    },
    author: {
      type: 'VARCHAR(100)',
      notNull: true,
    },
    summary: {
      type: 'TEXT',
      notNull: true,
    },
    year: {
      type: 'VARCHAR(4)',
      notNull: true,
    },
    publisher: {
      type: 'VARCHAR(100)',
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
