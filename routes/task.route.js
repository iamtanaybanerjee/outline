const express = require("express");
const router = express.Router();
const {
  createNewTask,
  updateATask,
  getAllTasks,
  deleteATask,
} = require("../controllers/taskControllers");

router.post("/task", createNewTask);
router.post("/task/:id", updateATask);
router.get("/tasks", getAllTasks);
router.delete("/task/:id", deleteATask);

module.exports = router;
