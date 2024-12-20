const { Router } = require('express');
const BeneficiaryController = require('../controllers/beneficiaries.controller');

const router = Router();

router.get('/', BeneficiaryController.getAll);
router.get('/:id', BeneficiaryController.getById);
router.post('/', BeneficiaryController.create);
router.put('/:id', BeneficiaryController.update);
router.delete('/:id', BeneficiaryController.delete);

module.exports = router;
