const User = require("../models/auth");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body);
  if (!email || !password) {
    console.log("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    console.log("Invalid Credentials");
  }
  if (user && user.password == password) {
    const hash = jwt.sign({ user }, "secret");
    res.status(200).json({ logged: true, accessToken: hash, user });
    console.log(hash);
  } else {
    console.log("Invalid Credentials");
    res.json({ doesNotExist: true });
  }
};

const register = async (req, res) => {
  const found = await User.findOne({ email: req.body.email });

  if (!found) {
    await res.json({ alreadyExist: false, logged: true });
    await User.create({ ...req.body });
  } else {
    await res.json({ alreadyExist: true, logged: false });
    console.log("already exist");
    console.log(found);
  }
};

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    res.status(401);
  }
  jwt.verify(token, "secret", (err, user) => {
    if (err) {
      return res.status(401);
    } else {
      req.user = user;
      next();
    }
  });
};

const decVotesLeft = async (req, res) => {
  const item = await User.findByIdAndUpdate(
    { _id: req.params.id },

    { $inc: { voteRemaining: -1 } },
    { new: true }
  );
  res.send(item);
  console.log("decremented");
  console.log(req.params.id);
};

module.exports = {
  login,
  register,
  authenticateToken,
  decVotesLeft,
};
