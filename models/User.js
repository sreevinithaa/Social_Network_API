const { Schema, Types,model } = require("mongoose");
var validator = require('validator');
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
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: true,
    timestamps:true
  }
);
userSchema
  .virtual("friendsCount")
  // Getter
  .get(function () {
    return this.friends.length;
  });


const User = model("user", userSchema);

module.exports = User;
