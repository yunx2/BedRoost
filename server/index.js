const express = require('express');
// const morgan = require('morgan');
const Description = require('../db/Description.js');

const app = express();
const port = 3000;

app.use('description/:listingId', express.static('dist'));

app.get('/description/:listingId', (req, res) => res.send(req.params.listingId));
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening at port ${port}`);
  }
});
