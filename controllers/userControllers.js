const {
  validateUsernameAndPassword,
  doesUserExist,
} = require("../validations/validations");
const { createUser } = require("../services/userServices");

const register = async (req, res) => {
  const body = req.body;
  try {
    const errors = validateUsernameAndPassword(body.username, body.password);
    if (errors.length > 0) return res.status(400).json({ errors });

    const value = await doesUserExist(body.username);
    if (value === true)
      return res
        .status(400)
        .json({ message: "User alreday exist, please login" });

    const response = await createUser(body.username, body.password);
    return res.status(201).json({
      message: "User registered suceessfully",
      user: { id: response.id, username: response.username },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { register };
