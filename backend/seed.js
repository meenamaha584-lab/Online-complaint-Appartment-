const { User, sequelize } = require('./models');
const bcrypt = require('bcrypt');

const seedAdmin = async () => {
    try {
        await sequelize.sync();
        const hashedPassword = await bcrypt.hash('24cs078', 10);
        const existingAdmin = await User.findOne({ where: { username: 'Maha' } });

        if (existingAdmin) {
            existingAdmin.password = hashedPassword;
            await existingAdmin.save();
            console.log('Admin user "Maha" updated with new password.');
        } else {
            await User.create({
                username: 'Maha',
                password: hashedPassword,
                role: 'admin',
            });
            console.log('Admin user created: Maha / 24cs078');
        }
    } catch (error) {
        console.error('Error seeding admin:', error);
    } finally {
        process.exit();
    }
};

seedAdmin();
