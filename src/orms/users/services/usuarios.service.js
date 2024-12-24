const UserRepository = require('../repositories/usuarios.repository');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const UserService = {
  getAllUsers: async () => {
    try{
      return UserRepository.getAll();
    }catch(err){
      console.log("Error al guardar los datos");
      return err;
    }
  },

  getUserById: async (id) => {
    return UserRepository.getById(id);
  },

  createUser: async (userData) => {
    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, salt);
    userData.token = crypto.randomBytes(32).toString('hex');
    userData.img_profile_path = saveBase64File(userData.img_profile_path, "profile_" + userData.username);

    return UserRepository.create(userData);
  },

  updateUser: async (id, userData) => {
    if (userData.password) {
      const salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash(userData.password, salt);
    }

    return UserRepository.update(id, userData);
  },

  deleteUser: async (id) => {
    return UserRepository.delete(id);
  },
};

module.exports = UserService;