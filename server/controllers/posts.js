import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const foundPost = await PostMessage.findById(id);
    res.status(200).json(foundPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const body = req.body;
  const newPost = new PostMessage({
    ...body,
    user: req.userId,
    created: new Date().toISOString(),
  });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("no post with id " + _id);
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("no post with id " + id);
  }
  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  const newLikeIndex = -1;

  let authenticatedUser = req.userId;
  if (!authenticatedUser) {
    return res.json({ message: "User authentication required to like post." });
  }
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("no post with id " + id);
  }

  const post = await PostMessage.findById(id);
  const postIndex = post.likes.findIndex(
    (userId) => userId === String(authenticatedUser)
  );
  if (postIndex === newLikeIndex) {
    post.likes.push(authenticatedUser);
  } else {
    post.likes = post.likes.filter(
      (userId) => userId !== String(authenticatedUser)
    );
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost);
};
