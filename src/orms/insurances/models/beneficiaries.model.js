const { DataTypes } = require("sequelize");
const db = require("../../../config/conexion");

const Beneficiary = db.define(
  "Beneficiary",
  {
    beneficiary_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    img_person: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    citizenship_card: {
      type: DataTypes.STRING(15),
      unique: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "beneficiaries",
    timestamps: false,
  }
);

module.exports = Beneficiary;
