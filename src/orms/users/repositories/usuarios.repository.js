const { Sequelize } = require('sequelize'); 
const User = require('../models/user.model');

const UserRepository = {
  getAll: async () => {
    return User.findAll();
  },

  getById: async (id) => {
    return User.findByPk(id);
  },

  create: async (userData) => {
    try{
      return User.create(userData);
    }catch(err){
      console.log("Error al crear el usuario: " + err);
    }
  },

  update: async (id, userData) => {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user.update(userData);
  },

  delete: async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user.destroy();
  },

  authUserOrEmail: async (userInput) => {
      const user = await User.findOne({
        where: {
          [Sequelize.Op.or]: [{ email: userInput }, { username: userInput }],
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
  }
};

module.exports = UserRepository;
