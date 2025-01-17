const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./src/config/conexion");
const setupAssociations = require('./src/config/associations');

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));  // Aquí se asegura el límite
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Rutas principales
app.use("/seggu", require("./src/routes"));

// Sincronizar modelos con la base de datos y levantar el servidor
(async () => {
    try {
        await setupAssociations();

        // Verificar la conexión con la base de datos
        await db.authenticate();
        console.log("Connection to the database has been established successfully.");

        // Sincronizar modelos
        await db.sync({ alter: true }); 
        console.log("All models were synchronized successfully.");

        // Iniciar el servidor
        app.listen(4000, () => {
            console.log("Server is running");
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1); 
    }
})();
