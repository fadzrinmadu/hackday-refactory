const router = require('express').Router();
const handler = require('./handler');

router.get('/', handler.getBooksHandler);
router.get('/:id', handler.getBookByIdHandler);
router.post('/', handler.postBookHandler);
router.put('/:id', handler.putBookByIdHandler);
router.delete('/:id', handler.deleteBookByIdHandler);

module.exports = router;
