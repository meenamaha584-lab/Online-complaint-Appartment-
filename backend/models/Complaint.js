module.exports = (sequelize, DataTypes) => {
    const Complaint = sequelize.define('Complaint', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        flatNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ageGroup: {
            type: DataTypes.STRING, // Kid, Adult, Senior
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING, // Water, Electricity, Lift, Noise, Security, Other
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'Pending', // Pending, In Progress, Solved
        },
    });
    return Complaint;
};
