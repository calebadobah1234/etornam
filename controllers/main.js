const Main = require("../models/main");

const get20Items = async (req, res) => {
  const items = await Main.find({});
  res.status(200).json(items);
};

const getItem = async (req, res) => {
  const item = await Main.findById(req.params.id);
  res.status(200).json(item);
};

const addVote = async (req, res) => {
  const item = await Main.findByIdAndUpdate(
    { _id: req.params._id },
    { $inc: { votes: 1 } },
    { new: true }
  );
  console.log("vote added");
};

const addCandidate = async (req, res) => {
  const user = await Main.create(req.body);
  console.log(user);
  res.json(user);
};

const deleteCandidate = async (req, res) => {
  const user = await Main.deleteOne({ _id: req.params.id });
  console.log(`${user} has been deleted`);
};

module.exports = {
  get20Items,
  getItem,
  addVote,
  addCandidate,
  deleteCandidate,
};
