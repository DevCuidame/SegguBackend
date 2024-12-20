const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviews.controller');

router.get('/', ReviewController.getAll);
router.get('/:id', ReviewController.getById);
router.post('/', ReviewController.create);
router.put('/:id', ReviewController.update);
router.delete('/:id', ReviewController.delete);

module.exports = router;
