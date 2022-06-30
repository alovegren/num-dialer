import express from 'express';
const router = express.Router();

import dialerService from '../controllers/dialerService.js';

router.post('/calls', dialerService.dial);
router.post('/callStatuses', dialerService.updateCallStatus);

export default router;