// const connection = require("./db_connection");
// const mongoose = require('mongoose');
const mongoose = require("./db_connection");

const Schema = mongoose.Schema;

/*const ItemSchema = new Schema({
  created: { type: Date, default: Date.now },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
});*/

const UserSchema = new Schema({
  created: { type: Date, default: Date.now },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String/*, required: true, unique: true*/ },
  passwordHash: { type: String, required: true },
});

const selectedTimesSchema = new Schema({
  name: String,
  selectedTimes: [Date]
});

const pollSchema = new Schema({
  name: String,
  created: { type: Date, default: Date.now },
  poll_open_from: Date,
  poll_open_until: Date,
  available_times: [Date],
  selected_times: [selectedTimesSchema],
  user: [UserSchema]
});


module.exports = {
  //Item: mongoose.model("Item", ItemSchema),
  User: mongoose.model("User", UserSchema),
  Poll: mongoose.model("Poll", pollSchema),
  SelectedTimes: mongoose.model("SelectedTimes",selectedTimesSchema)
};