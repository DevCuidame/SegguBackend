const express = require('express');
const router = express.Router();
const InsuranceController = require('../controllers/insurances.controller');

router.get('/', InsuranceController.getAll);
router.get('/:id', InsuranceController.getById);
router.get('/user/:id', InsuranceController.getByUserId);
router.post('/', InsuranceController.create);
router.put('/:id', InsuranceController.update);
router.delete('/:id', InsuranceController.delete);

module.exports = router;
