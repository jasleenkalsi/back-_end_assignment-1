import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import healthRouter from './routes/health'; // Import health check router

const app = express();

// Swagger configuration
const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API for testing health check endpoints',
    },
  },
  apis: ['./src/app.ts'], // Path to your route files for Swagger documentation
};

// Generate Swagger specification
const swaggerDocs = swaggerJSDoc(swaggerOptions);

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Example to verify the server works)
app.get('/', (req, res) => {
  res.send('Welcome to the API. Visit /api-docs for API documentation.');
});

app.get('/api/v1/health', (req, res) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date(),
    version: '1.0.0',
  });
});

app.use('/api/v1', healthRouter);  // Use health check route under '/api/v1'

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
export default app;
