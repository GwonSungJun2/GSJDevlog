import app from './app';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';
import authRouter from './routes/auth.route';
const PORT = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(authRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`Swagger: http://localhost:3000/api-docs`);
});
