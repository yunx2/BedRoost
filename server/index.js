const express = require('express');

const app = express();
const port = 3000;

app.use(app.static('./dist'));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening at port ${port}`);
  }
});
