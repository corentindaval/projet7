const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const routeuser = require('./routes/routeuser');
const routeforum = require('./routes/routeforum');
const routepost = require('./routes/routepost');
const db=require("./middleware/db-config");
db.sync();

app.use((req, res, next) => {/*autorisation contact multi-port */
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use("/images",express.static(path.join(__dirname,"images")));
/*partie users */
app.use('/api/user', routeuser);

/*partie forum */
app.use('/api/forum', routeforum);

/*partie post */
app.use('/api/post', routepost);

module.exports = app;