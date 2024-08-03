import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
  loginTime: {
    type: Date,
  },
  logoutTime: {
    type: Date,
  },
  ipAddress: {
    type: String,
  },
});

export default mongoose.model("Sessions", sessionSchema);
