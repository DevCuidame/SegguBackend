const express = require("express");
const router = express.Router();

const usersRoutes = require("../orms/users/routes/usuarios.routes");
const authRoutes = require("../orms/users/routes/auth.routes");
const companiesRoutes = require("../orms/companies/routes/companies.routes");
const insurancesRoutes = require("../orms/insurances/routes/insurances.routes");
const beneficiariesRoutes = require("../orms/insurances/routes/beneficiaries.routes");
const activesRoutes = require("../orms/insurances/routes/actives.routes");

router.use("/users", usersRoutes);
router.use("/auth", authRoutes);
router.use("/companies", companiesRoutes);
router.use("/insurances", insurancesRoutes);
router.use("/beneficiaries", beneficiariesRoutes);
router.use("/actives", activesRoutes);

module.exports = router;
