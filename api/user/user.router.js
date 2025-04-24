const {create} = require('./user.controller');
const router = require('express').Router();

/**
 * @swagger
 * /api/user/create:
 *   post:
 *     summary: Retrieve a list of users
 *     responses:
 *       201:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 */
router.post("/create", create);
module.exports = router;