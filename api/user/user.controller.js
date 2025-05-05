const {createUser} = require('./user.service');

module.exports = {
    create: async (req, res) => {
        try {
            const {name, email} = req.body;
            const user = await createUser({name, email});
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },
}