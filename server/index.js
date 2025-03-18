const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const TESTS=require('./models/Test');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.post('/add-tests', async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const newEntry = new TESTS({
      name,
      age,
      email,
    });

    await newEntry.save();

    res.status(201).json({ message: 'Data added successfully', data: newEntry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add data' });
  }
});


app.get('/', (req, res) => {
  res.send('Welcome to the MERN app backend');
});

app.get('/gg', (req, res) => {
  res.send('gg');
});

const PORT = process.env.PORT || 5000;
mongoose.connect("mongodb://localhost:27017/mern", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('Database connection error:', err));
