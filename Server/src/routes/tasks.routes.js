const Router = require('express').Router;
const router = Router()

const tasksCtrl = require('../controllers/tasks.controller');

router.post('/tasks', tasksCtrl.createTask)
router.get('/tasks', tasksCtrl.getTasks)
router.get('/tasks/:taskId', tasksCtrl.getTaskById)
router.put('/tasks/:taskId', tasksCtrl.updateTaskById)
router.delete('/tasks/:taskId', tasksCtrl.deleteTaskById)

module.exports = router;