const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PUT'
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));
app.use(routes);

app.listen(process.env.PORT || 3001, () => {
    console.log('Acessar http://localhost:3001');
});