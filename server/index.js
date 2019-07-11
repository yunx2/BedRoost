const express = require('express');
const path = require('path');
// const morgan = require('morgan');
const getData = require('../db/index.js');

const app = express();
const port = 8080;

app.use(express.static('dist'));

app.get('/description/:listingId', async (req, res) => {
  console.log('fetching data!');
  try {
    const docs = await getData(parseInt(req.params.listingId));
    res.send(docs);
    console.log('data sent');
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
