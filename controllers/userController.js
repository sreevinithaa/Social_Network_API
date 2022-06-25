const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');


module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find({})
    .populate('thoughts')
    .populate('friends')
      .then( (user) => {
       
        return res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
            user
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and remove associate thought
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
    .then((user) =>
    !user
      ? res.status(404).json({ message: 'No user with that ID' })
      : Thought.deleteMany({ _id: { $in: user.thoughts } })
  )
  .then(() => res.json({ message: 'user and thoughts deleted!' }))
  .catch((err) => res.status(500).json(err));
     
  },
 
};
