// Import required modules
const express = require('express');
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const ProductRoutes = require('./routes/index.js')
const cors = require('cors')

const app = express();

app.use (cors());
app.use(bodyparser.json());
app.use(ProductRoutes)

mongoose.connect("mongodb://localhost:27017/Shopping",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
  
  app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });
  
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log('Server is running on port ${port}');
  });