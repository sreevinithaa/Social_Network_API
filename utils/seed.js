const connection = require("../config/connection");
const { User, Thought } = require("../models");


const {
  getRandomThoughts,
  getRandomreactions,
  GetRandemUsers,
} = require("./data");
connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await Thought.deleteMany({});
  await User.deleteMany({});
  const userlist = GetRandemUsers(15);
  const thoughts = [];
  const thoughtslist = getRandomThoughts(10);
  await User.collection.insertMany(userlist);
  const insertedIds = await User.find({});

  for (let i = 0; i < thoughtslist.length; i++) {
    const thoughtText = thoughtslist[i].thoughts;
    const username =
      !insertedIds || insertedIds.length == 0
        ? thoughtslist[i].username
        : insertedIds[i].username;
    const userId =
      !insertedIds || insertedIds.length == 0 ? null : insertedIds[i]._id;
    const reactions = getRandomreactions(3);
    await Thought.create({
      thoughtText,
      username,
       reactions,
    })
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? console.log("Thought created, but found no user with that ID")
          : console.log("Created the thought 🎉")
      )
      .catch((err) => console.log(err));

    thoughts.push({
      thoughtText,
      username,
      userId,
      reactions,
    });
  }

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(userlist);
  console.table(thoughts);

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
