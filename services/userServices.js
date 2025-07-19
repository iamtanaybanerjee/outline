const { User: UserModel } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

module.exports = { createUser };
