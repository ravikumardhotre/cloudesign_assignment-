const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    status: {
      type: "string",
      default: "pending",
      enum: ["pending", "inprogress", "completed"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
