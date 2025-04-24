require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./config/swaggerConfig').swaggerOptions;
const userRouter = require('./api/user/user.router');

app.use(express.json());
app.use(bodyParser.json());


app.use("/api/user", userRouter);
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.get('/', (req, res) => res.send('Express & MongoDB on Docker!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
