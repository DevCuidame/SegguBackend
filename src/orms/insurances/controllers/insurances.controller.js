// src/controllers/insurances.controller.js
const InsuranceService = require('../services/insurances.service');
const CompanyService = require('../../companies/services/companies.service')

const InsuranceController = {
  getAll: async (req, res) => {
    try {
      const insurances = await InsuranceService.getAllInsurances();
      res.json(insurances);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const insurance = await InsuranceService.getInsuranceById(req.params.id);
      if (!insurance) return res.status(404).json({ error: 'Insurance not found' });
      res.json(insurance);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getByUserId: async (req, res) => {
    try {
      const insurance = await InsuranceService.getInsuranceByUserId(req.params.id);
      if (!insurance) return res.status(404).json({ error: 'Insurance not found' });
      res.json(insurance);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const insurance = await InsuranceService.createInsurance(req.body);
      res.status(201).json(insurance);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const insurance = await InsuranceService.updateInsurance(req.params.id, req.body);
      res.json(insurance);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  
  delete: async (req, res) => {
    try {
      await InsuranceService.deleteInsurance(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = InsuranceController;
