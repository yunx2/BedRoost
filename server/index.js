const express = require('express');
// const morgan = require('morgan');

const app = express();
const port = 8080;

app.use(express.static('./dist'));

app.get('/description', (req, res) => {
  res.send(console.log('success!')); // message shows up to the NODE console!!
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening at port ${port}`);
  }
});
