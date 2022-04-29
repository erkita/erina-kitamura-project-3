import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/post.js";
import userRoutes from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("App running succesfully");
});

const mongoEndpoint =
  "mongodb+srv://erkita:2062763511@cluster0.vksqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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
