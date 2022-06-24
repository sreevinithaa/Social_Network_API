const {  Types } = require("mongoose");
const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];
const mailExt=["@gmail.com","@ymail.com","@yahoo.com","@hotmail.com"];
const Userlist = [
  { username: "Aaran", email: "Aaran@gmail.com" },

  { username: "Abdulkadir", email: "Abdulkadir@hotmail.com" },
  { username: "Abdulkarem", email: "Abdulkarem@ymail.com" },
  { username: "Smith", email: "Smith@yahoomail.com" },
  { username: "Jones", email: "Jones@gmail.com" },
  { username: "Coollastname", email: "Coollastname@hotmail.com" },
  { username: "Zennon", email: "Zennon@gmail.com" },
  { username: "Tamar", email: "Tamar@ymail.com" },
  { username: "Farish", email: "Farish@gmail.com" },
  { username: "Sarah", email: "Sarah@hotmail.com" },
];

const thoughtText = [
  "Decision Tracker",
  "Find My Phone",
  "Learn Piano",
  "Starbase Defender",
  "Tower Defense",
  "Monopoly Money Manager",
  "Movie trailers",
  "Hello world",
  "Stupid Social Media App",
  "Notes",
  "Messages",
  "Email",
  "Compass",
  "Firefox",
  "Running app",
  "Cooking app",
  "Poker",
  "Deliveries",
];
const reacttext = [
  "Hello world",
  "Stupid Social Media App",
  "Notes",
  "Messages",
  "Email",
  "Compass",
  "Firefox",
  "Running app",
  "Cooking app",
  "Poker",
  "Deliveries",
  "Decision Tracker",
  "Find My Phone",
  "Learn Piano",
  "Starbase Defender",
  "Tower Defense",
  "Monopoly Money Manager",
  "Movie trailers",
  "Hello world",
  "Stupid Social Media App",
];

const users = [];
const getRandomUserName = () =>
  `${getRandomArrItem(names)}_${getRandomArrItem(names)}`;

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name

// Function to generate random applications that we can add to the database. Includes application tags.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      thoughts: getRandomArrItem(thoughtText),
      buildSuccess: Math.random() < 0.5,
      username: getRandomUserName(1),
    });
  }
  return results;
};
const getRandomreactions = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionId:new Types.ObjectId(),
      reactionBody: getRandomArrItem(reacttext),
      username: getRandomUserName(1),
      createdAt:Date.now
    });
  }
  return results;
};
const GetRandemUsers=(int)=>{
  let results = [];
  for (let i = 0; i < int; i++) {
    let name_random=getRandomUserName(1);
    results.push({
      username: name_random,
      email: `${name_random}${getRandomArrItem(mailExt)}`

    });
  }
  return results;
}
// Create the tags that will be added to each application

// Export the functions for use in seed.js
module.exports = { getRandomThoughts, getRandomreactions, GetRandemUsers};
