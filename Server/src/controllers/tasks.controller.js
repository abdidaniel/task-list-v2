const Task = require('../models/Task');

const createTask = async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
}

const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
}

const getTaskById = async (req, res) => {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
        return res.status(404).send();
    }
    res.send(task);
}

const updateTaskById = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true, runValidators: true });
    if (!task) {
        return res.status(404).send();
    }
    res.send(task);
}

const deleteTaskById = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.taskId);
    if (!task) {
        return res.status(404).send();
    }
    res.send("Tarea eliminada correctamente");
}

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById
};


