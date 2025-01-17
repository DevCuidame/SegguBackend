const DocumentService = require('../services/documents.service');

const DocumentController = {
    getAll: async (req, res) => {
        try {
            const documents = await DocumentService.getAllDocuments();
            res.json(documents);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllByInsuranceId: async (req, res) => {
        try {
            const documents = await DocumentService.getDocumentsByInsuranceId(req.params.insuranceId);
            res.json(documents);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllByUserId: async (req, res) => {
        try {
            const documents = await DocumentService.getDocumentsByUserId(req.params.userId);
            res.json(documents);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const document = await DocumentService.getDocumentById(req.params.id);
            if (!document) return res.status(404).json({ error: 'Document not found' });
            res.json(document);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const document = await DocumentService.createDocument(req.body);
            res.status(201).json(document);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const document = await DocumentService.updateDocument(req.params.id, req.body);
            res.json(document);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    
    delete: async (req, res) => {
        try {
            await DocumentService.deleteDocument(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = DocumentController;