const Company = require('../orms/companies/models/companies.model');
const User = require('../orms/users/models/user.model');
const Insurance = require('../orms/insurances/models/insurances.model');
const Beneficiary = require('../orms/insurances/models/beneficiaries.model');
const Active = require('../orms/insurances/models/actives.model');
const Review = require('../orms/reviews/models/reviews.model');
const Document = require('../orms/documents/models/document.model');

const setupAssociations = () => {
  // Asociaciones para Company
  Company.hasMany(Insurance, { foreignKey: 'company_id' });
  Insurance.belongsTo(Company, { foreignKey: 'company_id' });

  // Asociaciones para User
  User.hasMany(Insurance, { foreignKey: 'user_id' });
  Insurance.belongsTo(User, { foreignKey: 'user_id' });

  User.hasMany(Review, { foreignKey: 'user_id' });
  Review.belongsTo(User, { foreignKey: 'user_id' });

  User.hasMany(Document, { foreignKey: 'user_id' });
  Document.belongsTo(User, { foreignKey: 'user_id' });

  // Asociaciones para Insurance
  Insurance.belongsTo(Beneficiary, { foreignKey: 'beneficiary_id' });
  Beneficiary.hasMany(Insurance, { foreignKey: 'beneficiary_id' });

  Insurance.belongsTo(Active, { foreignKey: 'active_id' });
  Active.hasMany(Insurance, { foreignKey: 'active_id' });

  Insurance.hasMany(Document, { foreignKey: 'insurance_id' });
  Document.belongsTo(Insurance, { foreignKey: 'insurance_id' });
};

module.exports = setupAssociations;