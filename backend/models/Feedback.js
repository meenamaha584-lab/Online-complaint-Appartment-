module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define('Feedback', {
        rating: {
            type: DataTypes.INTEGER, // 1-5
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
        },
        emoji: {
            type: DataTypes.STRING, // Storing emoji char or name
        },
    });
    return Feedback;
};
