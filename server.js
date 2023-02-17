require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const projectRoutes = require('./routers/projectRoutes');

// express app
const app = express();

// port
const port = process.env.PORT || 8000;

// middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// routes
app.use('/api/projects', projectRoutes);

// mongoose
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen to requests
    app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    })
  })
  .catch(err => {
    console.log(err);
  })


