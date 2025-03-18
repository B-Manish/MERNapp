
const mongoose = require('mongoose');

const testsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});

const TESTS = mongoose.model('TESTS', testsSchema);

module.exports = TESTS;
