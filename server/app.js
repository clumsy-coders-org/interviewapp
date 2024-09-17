// server.js
const express = require('express');
const dotenv = require('dotenv');
const dbconnect = require('../Database/connect');

// Initialize environment variables
dotenv.config();

const app = express();

// Connect to MongoDB

  dbconnect();

// Middleware
app.use(express.json()); // Body parser

// Routes
app.use('/api/auth', require('./Routes/auth'));

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
