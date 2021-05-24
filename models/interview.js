const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const interviewSchema = new Schema({
    url: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
    company: { type: String, required: true },
});


const Interview = mongoose.model("Interview", interviewSchema);

module.exports = Interview;
