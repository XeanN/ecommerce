const express = require('express');
const { createUser} = require("../controller/userCtrl.js")
const router = express.Router();

router.post("/register");
module.exports = router;