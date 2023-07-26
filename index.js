const express = require("express");
const app = express();
const connectDb = require("./db/connectDb");
const port = process.env.PORT || 5000;
const router = require("./routes/routes");
const authRouter = require("./routes/auth");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use("/auth", authRouter);

const start = () => {
  app.listen(port, async () => {
    try {
      await connectDb(
        "mongodb+srv://calebadobah1234:bananaman1234@crackxx.fxot0.mongodb.net/ai-blog"
      );
    } catch (err) {
      console.log(err);
    }
    console.log(`server running on port ${port}`);
  });
};

start();
