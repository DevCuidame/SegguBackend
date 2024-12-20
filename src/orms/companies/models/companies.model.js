const { DataTypes } = require('sequelize');
const db = require('../../../config/conexion');

const Company = db.define('Company', {
  company_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  phone_number_asist: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'companies',
  timestamps: false,
});

module.exports = Company;
