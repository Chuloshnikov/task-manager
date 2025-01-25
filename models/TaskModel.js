import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const TaskSchema = new Schema(
  {
    description: {
      type: String,
      require: [true, "Task description is required"],
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Task = models?.Task || model("Task", TaskSchema);

export default Task;