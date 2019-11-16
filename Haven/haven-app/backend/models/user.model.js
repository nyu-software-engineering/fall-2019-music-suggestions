const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 6
  },
  user_type: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: false,
    unique: false,
    trim: true
  },  
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
