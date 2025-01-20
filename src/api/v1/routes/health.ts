import { Router } from 'express';

const router = Router();

const version = "1.0.0"; // Example API version

// Health Check Route
router.get('/health', (req, res) => {
  const uptime = process.uptime();
  const timestamp = new Date().toISOString();

  res.json({
    status: 'OK',
    uptime,
    timestamp,
    version
  });
});

export default router;
