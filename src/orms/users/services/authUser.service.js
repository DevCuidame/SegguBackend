const bcrypt = require('bcryptjs');
const UserRepository = require('../repositories/usuarios.repository');
const { generateToken } = require('../../../utils/jwt');

const AuthService = {
  authenticate: async (userInput, password) => {
    try {
      // Buscar usuario por correo o nombre de usuario
      const user = await UserRepository.authUserOrEmail(userInput);

      // Verificar contraseña
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return { success: false, status: 401, message: "Contraseña incorrecta." };
      }

      // Generar token JWT usando los datos del usuario
      const token = generateToken({ id: user.user_id, email: user.email, username: user.name });
      const tokenUpdate = await UserRepository.update( user.user_id, {token});

      return { 
        success: true,
        user: {
          "id": user.user_id,
          "email": user.email,
          "username": user.name
        },
        token,
      };

    } catch (error) {
      console.error("Error en el servicio de autenticación:", error);
      return { success: false, message: "Error al autenticar usuario." };
    }
  },
};

module.exports = AuthService;
