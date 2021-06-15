const dotenv = require('dotenv');
const connectDB = require('./config/db');

// env setup
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

//
