const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;


require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

require('./server/routes/workshop.routes')(app);
require('./server/routes/stations.routes')(app);

app.listen(port,() => {
    console.log('Listening on port '+ port)
})


