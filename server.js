const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const cors = require('cors')
const port = process.env.PORT || 5000;
const Todo = require('./medels/Todo')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to DB'))
.catch(console.error);

app.get('./todos', async (req, res) => {
  const todos = await Todo.find();

  res.json(todos)
})

app.listen(port, () => console.log("Server started on port 5000"))