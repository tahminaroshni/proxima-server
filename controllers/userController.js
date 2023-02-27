const mongoose = require('mongoose');

const loginUser = async (req, res) => {
  res.json({ message: 'login' })
}

const signupUser = async (req, res) => {
  res.json({ message: 'signup' })
}

module.exports = {
  loginUser,
  signupUser
}