import { Router } from 'express';
import { validateDto } from '../middlewares/validate';
import { RegisterDto } from '../users/dto/register.dto';
const router: Router = Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: 로그인
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: 로그인 성공
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: 회원가입
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: './users/dto/register.dto'
 *     responses:
 *       200:
 *         description: 성공
 */
router.post('/register', validateDto(RegisterDto), (req, res) => {
  res.json(req.body);
});
router.post('/login', (req, res) => {
  res.json(req.body);
});

export default router;
