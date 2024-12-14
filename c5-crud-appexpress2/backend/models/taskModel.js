import mongoose from "mongoose";

// schema is the identity of field, how many fields are you using in the application

const taskSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String},
    due_date: {type: String}
}, {timestamps: true})


// type: String, required: true, unique: true

const Tasks = mongoose.model('Tasks', taskSchema);

export default Tasks;



/* 

Extracted Code

import mongoose from "mongoose";


// schema is the identity of feild how many feild are you using in the application

const taskSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String},
    due_date:{type:String},
},{timestamps:true})


const Tasks = mongoose.model('tasks',taskSchema);


export default Tasks;

*/
