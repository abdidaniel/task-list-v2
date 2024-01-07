const mongoose = require('mongoose');
require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to DB"))
.catch((error) => console.error(error))