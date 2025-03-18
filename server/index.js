// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Welcome to the MERN app backend');
});

// Database connection
const PORT = process.env.PORT || 5000;
mongoose.connect("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('Database connection error:', err));
