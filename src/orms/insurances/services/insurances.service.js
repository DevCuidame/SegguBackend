// src/services/insurances.service.js
const InsuranceRepository = require('../repositories/insurances.repository');

const InsuranceService = {
  getAllInsurances: async () => InsuranceRepository.getAll(),

  getInsuranceById: async (id) => InsuranceRepository.getById(id),

  getInsuranceByUserId: async (id) => InsuranceRepository.getByUserId(id),

  createInsurance: async (insuranceData) => InsuranceRepository.create(insuranceData),

  updateInsurance: async (id, insuranceData) => InsuranceRepository.update(id, insuranceData),
  
  deleteInsurance: async (id) => InsuranceRepository.delete(id),
};

module.exports = InsuranceService;
