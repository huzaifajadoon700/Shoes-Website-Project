import mongoose from "mongoose";

const googleUserStructure = new mongoose.Schema({
  fullName : String,
  email : String
});

export const googleUser = mongoose.model("GoogleUserData", googleUserStructure);
