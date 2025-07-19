const { User: UserModel } = require("../models");

const validateUsernameAndPassword = (username, password) => {
  const errors = [];
  if (!username || typeof username !== "string" || username === "")
    errors.push("username is required and cannot be empty");
  if (!password || typeof password !== "string" || password === "")
    errors.push("password is required and cannot be empty");

  return errors;
};

const doesUserExist = async (username) => {
  try {
    const userObj = await UserModel.findOne({ where: { username } });
    if (!userObj) return false;
    return true;
  } catch (error) {
    throw error;
  }
};

const validateTaskProperties = (title, description, status) => {
  const errors = [];
  if (!title || typeof title !== "string" || title === "")
    errors.push("title is required and cannot be empty");
  if (!description || typeof description !== "string" || description === "")
    errors.push("description is required and cannot be empty");
  return errors;
};

module.exports = {
  validateUsernameAndPassword,
  doesUserExist,
  validateTaskProperties,
};
