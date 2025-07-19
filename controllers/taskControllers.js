const { validateTaskProperties } = require("../validations/validations");
const {
  createTask,
  updateTask,
  allTasks,
  destroyTask,
} = require("../services/taskServices");

const createNewTask = async (req, res) => {
  const body = req.body;
  const userId = req.query.userId;
  try {
    const errors = validateTaskProperties(
      body.title,
      body.description,
      body.status
    );

    if (errors.length > 0) return res.status(400).json({ errors });

    const taskObj = await createTask(
      userId,
      body.title,
      body.description,
      body.status
    );
    return res.status(201).json({ message: "Task created", task: taskObj });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateATask = async (req, res) => {
  const body = req.body;
  const userId = req.query.userId;
  const id = req.params.id;
  try {
    const errors = validateTaskProperties(
      body.title,
      body.description,
      body.status
    );
    if (errors.length > 0) return res.status(400).json({ errors });

    const response = await updateTask(id, body);
    if (!response.message)
      return res.status(404).json({ message: "No task found" });

    return res
      .status(200)
      .json({ message: "updated task successfully", task: response.task });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await allTasks();
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteATask = async (req, res) => {
  const taskId = req.params.id;
  try {
    const response = await destroyTask(taskId);
    if (!response.message)
      return res.status(404).json({ message: "task not found" });

    return res.status(200).json({ message: response.message });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createNewTask, updateATask, getAllTasks, deleteATask };
