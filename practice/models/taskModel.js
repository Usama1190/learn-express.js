import mongoose from "mongoose"

const taskSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String},
    due_date: {type: String}
}, { timestamps: true });

const Tasks = mongoose.model('Tasks', taskSchema);

export default Tasks;