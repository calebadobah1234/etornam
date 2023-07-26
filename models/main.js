const mongoose = require("mongoose");

const mainSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    default:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/great-spy-movie-flops.jpeg?q=50&fit=contain&w=943&h=&dpr=1.5",
  },
  description: {
    required: false,
    type: String,
  },
  votes: {
    type: Number,
    default: 0,
  },
  position: {
    type: String,
  },
});

module.exports = mongoose.model("vote", mainSchema);
