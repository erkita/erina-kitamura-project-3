import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/post.js";
import userRoutes from "./routes/user.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("App running succesfully");
});

const mongoEndpoint = process.env.mongoEndpoint;
const PORT = process.env.PORT || 8000;

mongoose
  .connect(mongoEndpoint)
  .then(() =>
    app.listen(constants.PORT, () =>
      console.log(`Server Running on Port ${constants.PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

mongoose.Promise = global.Promise;

mongoose
  .connect(mongoEndpoint)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log("this is error"));
