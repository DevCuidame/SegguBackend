const documentRepository = require('../repositories/documents.repository');

class DocumentService {
    async getAllDocuments() {
        try {
            return await documentRepository.findAll();
        } catch (error) {
            throw new Error('Error fetching documents: ' + error.message);
        }
    }

    async getDocumentsByInsuranceId(insurance_id) {
        try {
            return await documentRepository.findAllByInsuranceId(insurance_id);
        } catch (error) {
            throw new Error('Error fetching documents by insurance_id: ' + error.message);
        }
    }

    async getDocumentsByUserId(user_id) {
        try {
            return await documentRepository.findAllByUserId(user_id);
        } catch (error) {
            throw new Error('Error fetching documents by user_id: ' + error.message);
        }
    }

    async getDocumentById(id) {
        try {
            return await documentRepository.findById(id);
        } catch (error) {
            throw new Error('Error fetching document: ' + error.message);
        }
    }

    async createDocument(documentData) {
        try {
            return await documentRepository.create(documentData);
        } catch (error) {
            throw new Error('Error creating document: ' + error.message);
        }
    }

    async updateDocument(id, documentData) {
        try {
            return await documentRepository.update(id, documentData);
        } catch (error) {
            throw new Error('Error updating document: ' + error.message);
        }
    }

    async deleteDocument(id) {
        try {
            return await documentRepository.delete(id);
        } catch (error) {
            throw new Error('Error deleting document: ' + error.message);
        }
    }
}

module.exports = new DocumentService();