const UserRepository = require('../repositories/usuarios.repository');
const { buildImage } = require('../../../utils/imageHandler');
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
    const privename = userData.username.replace(/\s+/g, '-').toLowerCase();
    userData.password = await bcrypt.hash(userData.password, salt);
    userData.token = await crypto.randomBytes(32).toString('hex');
    
    if(userData.img_profile_path){
      userData.img_profile_path = await buildImage(privename, "imageProfile", userData.img_profile_path);
    }

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