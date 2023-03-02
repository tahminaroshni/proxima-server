const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("Fill up all the fields");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password must include uppercase, lowercase, number & symbol");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("email already exists");
  }

  // encrypt password or hasing
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // create an user
  const user = await this.create({ email, password: hash });
  return user;
}

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Fill up all the fields");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Wrong email");
  }

  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) {
    throw Error("Wrong Password");
  }

  return user;
}

module.exports = mongoose.model('User', userSchema);