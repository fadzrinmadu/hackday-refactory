const mapDBToModel = ({
  id,
  isbn,
  name,
  author,
  summary,
  year,
  publisher,
  created_at,
  updated_at,
}) => ({
  id,
  isbn,
  name,
  author,
  summary,
  year,
  publisher,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel };
