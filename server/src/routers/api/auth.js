const express = require("express");
const { handleRegister, handleLogin } = require("../../controllers/auth");

const router = express.Router();

router.post("/login", handleLogin);
router.post("/register", handleRegister);

module.exports = router;