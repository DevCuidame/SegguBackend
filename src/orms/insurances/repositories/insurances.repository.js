const Insurance = require('../models/insurances.model');
const Company = require('../../companies/models/companies.model');

const InsuranceRepository = {
  getAll: async () => Insurance.findAll(),

  getById: async (id) => {
    const insurance = await Insurance.findOne({
      where: { insurance_id: id },
      include: [
        {
          model: Company,
          attributes: ['company_id', 'name', 'address'],
        },
      ],
    });
  
    return insurance;
  },
  
  getByUserId: async (id) => {
    const insurance = await Insurance.findAll({
      where: { user_id: id },
      include: [
        {
          model: Company,
          attributes: ['company_id', 'name', 'address', 'phone_number_asist'],
        },
      ],
    });
  
    return insurance;
  },

  create: async (insuranceData) => Insurance.create(insuranceData),

  update: async (id, insuranceData) => {
    const insurance = await Insurance.findByPk(id);
    if (!insurance) throw new Error('Insurance not found');
    return insurance.update(insuranceData);
  },
  
  delete: async (id) => {
    const insurance = await Insurance.findByPk(id);
    if (!insurance) throw new Error('Insurance not found');
    return insurance.destroy();
  },
};

module.exports = InsuranceRepository;
