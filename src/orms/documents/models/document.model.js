const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/conexion');

const Document = sequelize.define(
  'Document',
  {
    document_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    public_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    priv_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    file_path: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'documents',
    timestamps: false,
  }
);

module.exports = Document;
