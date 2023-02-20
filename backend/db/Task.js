const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    is_active: { type: Boolean, default: true },
    statuss:String,
   
  
});
module.exports = mongoose.model("tasks", taskSchema);