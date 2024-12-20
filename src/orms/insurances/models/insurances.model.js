const { DataTypes } = require('sequelize');
const db = require('../../../config/conexion');
const User = require('../../users/models/user.model');
const Company = require('../../companies/models/companies.model');
const Beneficiary = require('./beneficiaries.model');
const Active = require('./actives.model');

const Insurance = db.define('Insurance', {
  insurance_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  beneficiary_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Beneficiary,
      key: "beneficiary_id",
    },
  },
  active_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Active,
      key: "active_id",
    },
  },
  product: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  type: { 
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  renewal_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  coverage: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  asist: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  category: {
    type: DataTypes.ARRAY(DataTypes.STRING(50)),
    allowNull: true,
  },
  policy_number: { 
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Company,
      key: 'company_id',
    },
  },
}, {
  tableName: 'insurances',
  timestamps: false,
});

module.exports = Insurance;
