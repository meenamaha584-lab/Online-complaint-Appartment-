const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../../database.sqlite'), // Store in root
    logging: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import Models
db.User = require('./User')(sequelize, Sequelize);
db.Complaint = require('./Complaint')(sequelize, Sequelize);
db.Feedback = require('./Feedback')(sequelize, Sequelize);

// Relationships (if any)
// Example: User.hasMany(Complaint);

module.exports = db;
