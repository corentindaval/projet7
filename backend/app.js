const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const routeuser = require('./routes/routeuser');
//const routeforum = require('./routes/routeforum');
//const routepost = require('./routes/routepost');


app.use((req, res, next) => {/*autorisation contact multi-port */
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());


/*partie users */
app.use('/', routeuser);

/*partie forum */
/*app.use('/', routeforum);

/*partie post */
//app.use('/', routepost);

module.exports = app;