// src/routes/index.mjs
import express from 'express';

const router = express.Router();

// Define a basic route
router.get('/', (req, res) => {
  res.send('Hello from the route!');
});

export default router;
