const mongoose = require('mongoose');
const Description = require('./Description.js');
const generateFakeDescriptions = require('./seed.js');
/* eslint-disable no-console */

mongoose.connect('mongodb://localhost:27017');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('connected');
  const docs = generateFakeDescriptions();
  try {
    const result = await Description.create(docs);
    console.log('inserted');
  } catch (err) {
    console.error(err);
  }
 
});
