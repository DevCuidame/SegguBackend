const { Router } = require('express');
const documentsController = require('../controllers/documents.controller');

const router = Router();
/*
router.get('/', documentsController.getAllDocuments);
router.get('/:id', documentsController.getDocumentById);
router.post('/', documentsController.createDocument);
router.put('/:id', documentsController.updateDocument);
router.delete('/:id', documentsController.deleteDocument);
router.get('/insurance/:id', documentsController.getAllByInsuranceId);
router.get('/user/:id', documentsController.getAllByUserId);
*/
module.exports = router;

