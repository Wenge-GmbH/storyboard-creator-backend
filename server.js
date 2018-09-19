const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const gm = require('gm');
const _ = require('lodash');
const sharp = require('sharp');

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use(morgan());

io.on('connection', (socket) => {
  socket.emit('welcome', 'Hello WOrld');
  socket.on('editor-state', (editorData) => {
    console.log(editorData);
    socket.broadcast.emit('editor-state', editorData)
  })
})

server.listen(3001, () => {
  console.log('server is startet on port 3001');
})
