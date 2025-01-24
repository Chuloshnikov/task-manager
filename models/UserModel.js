import { mongoose, model, models } from "mongoose";

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: "user", //or admin
    },
  },
  { timestamps: true },
);

export const User = models?.User || model("User", UserSchema);
