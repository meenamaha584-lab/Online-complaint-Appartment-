const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', feedbackController.createFeedback);
router.get('/', authMiddleware, feedbackController.getAllFeedback);

module.exports = router;
