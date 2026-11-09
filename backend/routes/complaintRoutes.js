const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', complaintController.createComplaint);
router.get('/', authMiddleware, complaintController.getAllComplaints);
router.patch('/:id', authMiddleware, complaintController.updateComplaintStatus);

module.exports = router;
