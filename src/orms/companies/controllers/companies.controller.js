const CompanyService = require('../services/companies.service');

const CompanyController = {
  getAll: async (req, res) => {
    try {
      const companies = await CompanyService.getAllCompanies();
      res.json(companies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const company = await CompanyService.getCompanyById(req.params.id);
      if (!company) return res.status(404).json({ error: 'Company not found' });
      res.json(company);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const company = await CompanyService.createCompany(req.body);
      res.status(201).json(company);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const company = await CompanyService.updateCompany(req.params.id, req.body);
      res.json(company);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  
  delete: async (req, res) => {
    try {
      await CompanyService.deleteCompany(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = CompanyController;
