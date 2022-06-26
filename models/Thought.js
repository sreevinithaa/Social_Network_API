const { Schema, Types, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      new Schema(
        {
          reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
          },
          reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
          },
          username: {
            type: String,
            required: true,
          },
        },
        {
          id: false,
          timestamps: true,
        }
      ),
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: true,
    timestamps: true,
  }
);
thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Application model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
