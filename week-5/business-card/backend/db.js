require('dotenv').config();
const mongoose = require('mongoose');

exports.connect = () => {
    const MONGODB_URI = process.env.DB_URI;
    mongoose.connect(MONGODB_URI, {})
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => {
            console.error('Failed to connect to MongoDB:', err);
            process.exit(1);
        });
};