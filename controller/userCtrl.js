const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");
const createUser = asyncHandler( async(req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email});
    if(!findUser){
        // Crear nuevo usuario
        const newUser = await  User.create(req.body);
        res.json(newUser);
    } else{
        throw new Error("User Already Exists")
    }
});

module.exports = { createUser };