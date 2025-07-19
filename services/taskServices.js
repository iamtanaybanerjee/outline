const { Task: TaskModel } = require("../models");

const createTask = async (userId, title, description, status) => {
  try {
    const taskObj = await TaskModel.create({
      title,
      description,
      status,
      userId,
    });

    return taskObj;
  } catch (error) {
    throw error;
  }
};

const updateTask = async (id, body) => {
  try {
    const taskObj = await TaskModel.findOne({ where: { id } });
    if (!taskObj) return {};

    taskObj.set(body);
    await taskObj.save();

    return { message: "Task updated successfully", task: taskObj };
  } catch (error) {
    throw error;
  }
};

const allTasks = async () => {
  try {
    const taskList = await TaskModel.findAll();
    return taskList;
  } catch (error) {
    throw error;
  }
};

const destroyTask = async (id) => {
  try {
    const taskObj = await TaskModel.destroy({ where: { id } });
    if (taskObj === 0) return {};

    return { message: "Deleted task" };
  } catch (error) {
    throw error;
  }
};

module.exports = { createTask, updateTask, allTasks, destroyTask };
