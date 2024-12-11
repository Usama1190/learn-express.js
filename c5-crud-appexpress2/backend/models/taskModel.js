import mongoose from "mongoose";


// schema is the identity of feild how many feild are you using in the application

const taskSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String},
    due_date:{type:String},
},{timestamps:true})


const Tasks = mongoose.model('tasks',taskSchema);


export default Tasks;
