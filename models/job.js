const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const jobSchema = new Schema({
    url: { type: String, required: true, unique: true },
    company: { type: String, required: true },
    location: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    how_to_apply: { type: String, required: true },
    company_logo: { type: String, required: true, unique: true },
    
});


const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
