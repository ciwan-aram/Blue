const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    status: {
      type: String,
      enum: ["General", "doing", "done", "toUpdate"],
      default: "General"
    },
    assignee: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
