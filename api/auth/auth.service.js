const userRoles = Object.freeze({
    ADMIN: "admin",
    MODERATOR: "Moderator",
    USER: "User"
})

const users = [];

module.exports = {
    register: async (body) => {
        const { phone, otp } = body;
        users.push({ phone, otp })
        return { id: users.length, loggedBy: userRoles.ADMIN, data: body };
    },
}