const AuthService = require('../services/authUser.service');


const AuthController = async (req, res) => {
    const { userInput, password } = req.body;

    try {
        const result = await AuthService.authenticate(userInput, password);
    
        if (result.success) {
          return res.status(200).json({
            message: "Inicio de sesión exitoso.",
            user: result,
          });
        } else {
          return res.status(400).json({ message: result.message });
        }
    } catch (error) {
        console.error("Error en el controlador de autenticación:", error);
        return res.status(500).json({ message: "Error interno del servidor." });
    }
};

module.exports = AuthController;
