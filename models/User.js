const { Schema, Types,model } = require("mongoose");
var random = require('mongoose-random');
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: function (value) {
        if (!validator.isEmail(value)) {
          throw new Error("Not a valid email address");
        }
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: true,
    timestamps:true
  }
);
userSchema.pre("save", function (next) {
  username = username.trim();
  // do stuff
  next();
});
userSchema.plugin(random, {path: 'r'});
const User = model("user", userSchema);

module.exports = User;
