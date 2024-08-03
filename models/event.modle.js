import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
    default: "EveryDay",
  },
  time: {
    type: String,
    default: "Always Open",
  },
  location: {
    type: String,
    default: "Hyserabad",
  },
});

export default mongoose.model("Events", eventSchema);
