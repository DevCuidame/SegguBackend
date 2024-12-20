const { Router } = require('express');
const ActiveController = require('../controllers/actives.controller');

const router = Router();

router.get('/', ActiveController.getAll);
router.get('/:id', ActiveController.getById);
router.post('/', ActiveController.create);
router.put('/:id', ActiveController.update);
router.delete('/:id', ActiveController.delete);

module.exports = router;
