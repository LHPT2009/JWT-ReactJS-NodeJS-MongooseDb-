const User = require("../models/User.js");
const bcrypt = require("bcrypt");

const authController = {

    registerUser: async (req,res) =>{
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password,salt);
            
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });

            await newUser.save();
            res.status(200).json(newUser);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
};

module.exports = authController;