
function successResponse(res, message = 'Success', statusCode = 200, data = []) {
    return res.status(statusCode).json({ sucess: true, message, data })
}

function errorResponse(res, message = 'Error', statusCode = 500, data = []) {
    return res.status(statusCode).json({ sucess: false, message, data })
}

module.exports = {
    successResponse,
    errorResponse
}