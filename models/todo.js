const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title:{
        type: String, require: true,
    },
    description: {
        type: String, require: true,
    },
    date: {
        type: String, require: true,
    },
    time: {
        type: String, require: true,
},
},

{ timetamps: true},
);

const Todo = mongoose.model("Todo", todoSchema);


model.exports = {Todo};

    