import express from 'express';
const router = express.Router();

import callsController from '../controllers/callsController.js';

router.post('/calls', callsController.initCalls);
router.post('/callStatuses', callsController.updateCallStatus);

export default router;
