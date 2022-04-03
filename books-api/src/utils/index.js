const mapDBToModel = ({
  id,
  name,
  isbn,
  published,
  author,
  created_at,
  updated_at,
}) => ({
  id,
  name,
  isbn,
  published,
  author,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel };
