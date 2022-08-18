const User = require("../models/User");

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteUser: async (req,res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json("Delete successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = UserController;