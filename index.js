require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./config/swaggerConfig').swaggerOptions;
const userRouter = require('./api/user/user.router');
const authRouter = require('./api/auth/auth.router');

app.use(express.json());
app.use(bodyParser.json());
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter)

app.get('/', (req, res) => res.send('Express & MongoDB on Docker!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
