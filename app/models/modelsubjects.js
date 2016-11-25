var mongoose = require('mongoose');

var SubjectsSchema = new mongoose.Schema({
    name: String,
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Students'}],
});

module.exports = mongoose.model('Subjects', SubjectsSchema);