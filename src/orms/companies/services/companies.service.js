const CompanyRepository = require('../repositories/companies.repository');

const CompanyService = {
  getAllCompanies: async () => CompanyRepository.getAll(),

  getCompanyById: async (id) => CompanyRepository.getById(id),

  createCompany: async (companyData) => CompanyRepository.create(companyData),

  updateCompany: async (id, companyData) => CompanyRepository.update(id, companyData),
  
  deleteCompany: async (id) => CompanyRepository.delete(id),
};

module.exports = CompanyService;
