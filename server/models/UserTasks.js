// {
//     "username": "Manish",
//     "tasks": [
//       {
//         "id": 1,
//         "name": "task1",
//         "description": "desc",
//         "date": "01/01/2001",
//         "location": "Hyderabad"
//       }
//     ]
//   }


const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },  
  location: { type: String, required: true },
}, { _id: true });  

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  tasks: [taskSchema], 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
