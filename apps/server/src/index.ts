import app from './app';
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './routes/user.route';
const PORT = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`Swagger: http://localhost:3000/api-docs`)
});
