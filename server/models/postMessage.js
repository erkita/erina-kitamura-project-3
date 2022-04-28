import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  subject: String,
  message: String,
  name: String,
  user: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  created: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
