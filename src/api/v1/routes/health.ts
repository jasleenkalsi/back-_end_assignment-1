import { Router } from 'express';

const router: Router = Router();

/**
 * @openapi
 * /api/v1/health:
 *   get:
 *     description: Returns the health status of the API.
 *     responses:
 *       200:
 *         description: API is running fine
 */
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date(),
    version: '1.0.0',
  });
});

export default router;