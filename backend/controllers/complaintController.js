const { Complaint } = require('../models');

exports.createComplaint = async (req, res) => {
    try {
        const complaint = await Complaint.create(req.body);
        res.status(201).json(complaint);
    } catch (error) {
        res.status(500).json({ message: 'Error creating complaint', error });
    }
};

exports.getAllComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.findAll({ order: [['createdAt', 'DESC']] });
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching complaints', error });
    }
};

exports.updateComplaintStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const complaint = await Complaint.findByPk(id);

        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }

        complaint.status = status;
        await complaint.save();
        res.json(complaint);
    } catch (error) {
        res.status(500).json({ message: 'Error updating complaint', error });
    }
};
