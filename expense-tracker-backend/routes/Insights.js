const express = require('express');
const router = express.Router();
const insightsController = require('../controllers/Insights');
const authMiddleware = require('../middleware/middleware');

router.use(authMiddleware);

router.get('/', insightsController.getSpendingInsights);

module.exports = router;
