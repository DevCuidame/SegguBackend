const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companies.controller');

router.get('/', CompanyController.getAll);
router.get('/:id', CompanyController.getById);
router.post('/', CompanyController.create);
router.put('/:id', CompanyController.update);
router.delete('/:id', CompanyController.delete);

module.exports = router;
