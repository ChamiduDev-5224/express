const { register } = require('./auth.service')
const { successResponse, errorResponse } = require('../../config/responses')
module.exports = {
    register: async (req, res) => {
        try {
            const body = req.body;            
            const data = await register(body);
            return successResponse(res, 'Sucess', 201, data);
        } catch (error) {
            return errorResponse(res, error.message)
        }
    },
}