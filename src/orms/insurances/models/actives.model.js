const { DataTypes } = require("sequelize");
const db = require("../../../config/conexion");

const Active = db.define(
  "Active",
  {
    active_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    plate: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    line: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    model: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    cylinder_capacity: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    service: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    vehicle_class: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    cabin_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    fuel: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    capacity: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    engine_number: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    vin: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    serial_number: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    chassis_number: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    mobility_restriction: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    armor_level: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    horsepower: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    import_declaration: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    import_date: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    doors: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    registration_date: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    tableName: "actives",
    timestamps: false,
  }
);

module.exports = Active;
