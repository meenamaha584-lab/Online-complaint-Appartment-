require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/authRoutes');
const complaintRoutes = require('./routes/complaintRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/feedback', feedbackRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('Apartment Complaint System Backend is Running! 🚀');
});

// Sync Database and Start Server
sequelize.sync({ force: false }) // set force: true to drop tables on restart
    .then(() => {
        console.log('Database connected!');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });
