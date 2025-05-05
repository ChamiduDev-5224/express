const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0', 
        info: {
            title: 'My Express Rest API',
            version: '1.0.0',
            description: 'API documentation',
        },
        servers: [
            {
                url: process.env.URL,
            },
        ],
    },
    apis: ["./api/**/*.js", "./routes/**/*.js", "./index.js"],
};


exports.swaggerOptions = swaggerOptions;
