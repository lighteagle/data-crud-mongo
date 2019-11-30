const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: String,
  username: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
