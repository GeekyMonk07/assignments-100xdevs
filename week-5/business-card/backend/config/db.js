const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    // const MONGODB_URI = process.env.DB_URI;
    MONGODB_URI = "mongodb+srv://anmolandroid132:Rf8SRVKysvGBSiuk@cluster0.3fdtuu7.mongodb.net/businessCard"
    mongoose.connect(MONGODB_URI, {})
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => {
            console.error('Failed to connect to MongoDB:', err);
            process.exit(1);
        });
};