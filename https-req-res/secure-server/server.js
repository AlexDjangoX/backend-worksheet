const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World over HTTPS!');
});

const options = {
  key: fs.readFileSync('config/ssl/localhost-key.pem'),
  cert: fs.readFileSync('config/ssl/localhost.pem'),
};

https.createServer(options, app).listen(3000, () => {
  console.log(
    'HTTPS server with Express is running on https://localhost:3000/'
  );
});
