import express from 'express';
import { Express } from 'express';
const app: Express = express();

app.use(express.json());

app.get('/api', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.json({ email, password });
});
export default app;
