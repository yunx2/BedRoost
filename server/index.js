const express = require('express');
// const morgan = require('morgan');
const Description = require('../db/Description.js');

const app = express();
const port = 3000;

app.use('description/:listingId', express.static('dist'));

app.get('/description/:listingId', async (req, res) => {
  try {
    await res.send(req.params.listingId);
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }
});


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening at port ${port}`);
  }
});
