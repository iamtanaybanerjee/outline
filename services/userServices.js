const { User: UserModel } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const createUser = async (username, password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userObj = await UserModel.create({
      username,
      password: hashedPassword,
    });
    return userObj;
  } catch (error) {
    throw error;
  }
};

const comparePassword = async (username, password) => {
  try {
    const userObj = await UserModel.findOne({ where: { username } });

    const isMatch = await userObj.comparePassword(password);
    if (isMatch === false) return {};

    const token = jwt.sign({ id: userObj.id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    return { token, userObj };
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, comparePassword };
