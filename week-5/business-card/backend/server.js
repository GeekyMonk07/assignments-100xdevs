const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const db = require('./config/db');
db.connect();

// Routes
app.use('/api/cards', require('./routes/cards'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
