import { mongoose, model, models } from "mongoose";


const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        require: [true, 'Task description is required'],
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {timestamps: true});


export const Task = models?.Task || model('Task', TaskSchema);
