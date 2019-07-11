const express = require('express');
// const morgan = require('morgan');
const getData = require('../db/index.js');

const app = express();
const port = 8080;

app.use('description/:listingId', (req, res, next) => {
  express.static('./dist/');
  next();
});

app.get('/description/:listingId', async (req, res, next) => {
  console.log('fetching data!');
  try {
    const docs = await getData(parseInt(req.params.listingId));
    res.send(docs);
    console.log('data sent');
    next();
  } catch (err) {
    console.error('caught error');
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening at port ${port}`);
  }
});
