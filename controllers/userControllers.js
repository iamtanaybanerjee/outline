const {
  validateUsernameAndPassword,
  doesUserExist,
} = require("../validations/validations");
const { createUser, comparePassword } = require("../services/userServices");

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

const login = async (req, res) => {
  const body = req.body;
  try {
    const errors = validateUsernameAndPassword(body.username, body.password);
    if (errors.length > 0) return res.status(400).json({ errors });

    const value = await doesUserExist(body.username);
    if (value === false)
      return res.status(404).json({ message: "user not found" });

    const value2 = await comparePassword(body.username, body.password);
    if (!value2.token)
      return res.status(401).json({ error: "Invalid credentials" });

    return res
      .status(200)
      .json({ message: "user login successfull", access_token: value2.token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };
