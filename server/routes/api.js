import express from 'express';
const router = express.Router();

import dialerService from '../controllers/dialerService.js';

router.post('/calls', dialerService.dial);

export default router;