// src/repositories/companies.repository.js
const Company = require('../models/companies.model');

const CompanyRepository = {
  getAll: async () => Company.findAll(),

  getById: async (id) => Company.findByPk(id),

  create: async (companyData) => Company.create(companyData),

  update: async (id, companyData) => {
    const company = await Company.findByPk(id);
    if (!company) throw new Error('Company not found');
    return company.update(companyData);
  },
  
  delete: async (id) => {
    const company = await Company.findByPk(id);
    if (!company) throw new Error('Company not found');
    return company.destroy();
  },
};

module.exports = CompanyRepository;
