const User = require('../models/User');

exports.getUsers = async (req, res) => {
    const data = await User.find();
    res.json(data);
};

exports.getUserById = async (req, res) => {
    const user = await User.findOne({id : parseInt(req.params.id)});
    if (!user) return res.status(404).send('User not found');
    res.json(user);
};

exports.createUser = async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
};

exports.deletUser = async (req, res) => {
    const deleted = await User.findOneAndDelete({id: parseInt(req.params.id)});
    if (!deleted) return res.status(404).send('User not found');
};