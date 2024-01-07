const express = require('express');
const app = express();

app.use(express.json());

const tasksRoutes = require('./routes/tasks.routes');
app.get("/api", (req, res) => {
    res.send("API de la aplicación de lista de tareas");
});


app.use('/api', tasksRoutes);

module.exports = app;
