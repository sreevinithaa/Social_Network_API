const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThoughts, getRandomreactions,GetRandemUsers } = require('./data');
connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});
const userlist=GetRandemUsers(15);
  const thoughts = [];
  const thoughtslist=getRandomThoughts(10);
  for (let i = 0; i < thoughtslist.length; i++) {
    const thoughtText = thoughtslist[i].thoughts;
    const username = thoughtslist[i].username;
    const reactions = getRandomreactions(3);

    thoughts.push({
        thoughtText,
        username,
        reactions,
    });
  }

  await User.collection.insertMany(userlist);
  await Thought.collection.insertMany(thoughts);
  
  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(userlist);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
