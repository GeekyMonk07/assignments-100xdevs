const express = require('express');
require('dotenv').config({});
const app = express();
const cors = require('cors');

const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const db = require('./db');

// Routes
app.use('/api/cards', require('./routes/cards'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

db.connect();