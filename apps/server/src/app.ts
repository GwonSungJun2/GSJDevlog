import express from 'express';
import { Express } from 'express';
const app: Express = express();

app.use(express.json());

app.get('/api', (_req, res) => {
  res.json({ status: 'ok' });
});

export default app;
