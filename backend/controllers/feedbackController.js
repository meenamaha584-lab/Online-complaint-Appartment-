const { Feedback } = require('../models');

exports.createFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.create(req.body);
        res.status(201).json(feedback);
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error });
    }
};

exports.getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.findAll({ order: [['createdAt', 'DESC']] });
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback', error });
    }
};
