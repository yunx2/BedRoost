const express = require('express');
// const morgan = require('morgan');
const getData = require('../db/index.js');

const app = express();
const port = 8080;

app.use(express.static('./dist'));

app.get('/description/:listingId', (req, res) => {
  console.log('fetching data!');
  res.end(getData(parseInt(req.params.listingId)));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening at port ${port}`);
  }
});
