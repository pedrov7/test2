const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// Configuracion Socket io  
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: ["http://34.125.43.210","http://localhost:3000","http://34.125.43.210:3000", "http://127.0.0.1", "http://127.0.0.1:3000"],
    // allowedHeaders: ["my-custom-header"],
    methods:["GET","POST"],
    credentials: true
  }
});

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

require('./server/routes/workshop.routes')(app, io); //talleres
require('./server/routes/stations.routes')(app, io);    // estaciones


server.listen(port, () => {
  console.log('Listening on port ' + port)
})


