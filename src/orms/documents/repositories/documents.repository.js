const { Document } = require('../models/document.model');

class DocumentsRepository {
    async create(documentData) {
        try {
            const document = await Document.create(documentData);
            return document;
        } catch (error) {
            throw new Error('Error creating document: ' + error.message);
        }
    }

    async findAllByInsuranceId(insurance_id) {
        try {
            const document = await Document.findAll({ where: { insurance_id: insurance_id } });
            return document;
        } catch (error) {
            throw new Error('Error finding document by insurance_id: ' + error.message);
        }
    }

    async findAllByUserId(user_id) {
        try {
            const documents = await Document.findAll({ where: { user_id: user_id } });
            return documents;
        } catch (error) {
            throw new Error('Error finding documents by user_id: ' + error.message);
        }
    }

    async findById(documentId) {
        try {
            const document = await Document.findByPk(documentId);
            return document;
        } catch (error) {
            throw new Error('Error finding document: ' + error.message);
        }
    }

    async findAll() {
        try {
            const documents = await Document.findAll();
            return documents;
        } catch (error) {
            throw new Error('Error finding documents: ' + error.message);
        }
    }

    async update(documentId, documentData) {
        try {
            const document = await Document.findByPk(documentId);
            if (!document) {
                throw new Error('Document not found');
            }
            await document.update(documentData);
            return document;
        } catch (error) {
            throw new Error('Error updating document: ' + error.message);
        }
    }

    async delete(documentId) {
        try {
            const document = await Document.findByPk(documentId);
            if (!document) {
                throw new Error('Document not found');
            }
            await document.destroy();
            return document;
        } catch (error) {
            throw new Error('Error deleting document: ' + error.message);
        }
    }
}

module.exports = new DocumentsRepository();