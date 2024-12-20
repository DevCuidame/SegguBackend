const Insurance = require('../orms/insurances/models/insurances.model');
const Company = require('../orms/companies/models/companies.model');

const setupAssociations = () => {
  Company.hasMany(Insurance, { foreignKey: 'company_id'});
  Insurance.belongsTo(Company, { foreignKey: 'company_id'});
};

module.exports = setupAssociations;
