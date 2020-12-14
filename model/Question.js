const mongoose = require("../config/db"),
  Schema = mongoose.Schema;

const question = new Schema({
  ques: String,
});

const Questions = mongoose.model("question_data", question);

module.exports = { Questions };
