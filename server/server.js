const dotenv = require('dotenv');
dotenv.config(); // ✅ Load env FIRST

const connectDB = require('./config/db');
connectDB(); // ✅ Now MONGO_URI will be available

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// sample route
app.get('/', (req, res) => {
  res.send('DevLedger API is running!');
});

// server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//autherization
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Database
const = 
