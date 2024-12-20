const { DataTypes } = require('sequelize');
const db = require('../../../config/conexion');
const User = require('../../users/models/user.model');

const Review = db.define('Review', {
  review_id: {
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
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  stars: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'reviews',
  timestamps: false,
});

module.exports = Review;
