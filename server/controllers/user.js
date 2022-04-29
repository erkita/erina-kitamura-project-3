import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserSchema from "../models/user.js";

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserSchema.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      "secret",
      { expiresIn: "6h" }
    );
    res.status(201).json({ newUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sign up unsuccessful." });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    let foundUser = await UserSchema.findOne({ email });
    if (!foundUser) {
      return res.status(404).json({ message: "User not found." });
    }
    const isCorrectPassword = await bcrypt.compare(
      password,
      foundUser.password
    );
    if (!isCorrectPassword) {
      return res.status(400).json({ message: "Entered incorrect password." });
    }
    const token = jwt.sign(
      { email: foundUser.email, id: foundUser._id },
      "secret",
      { expiresIn: "6h" }
    );
    res.status(201).json({ result: foundUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sign in unsuccessful." });
  }
};
