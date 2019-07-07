/* eslint-disable max-len */
const faker = require('faker');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/description');
const randomName = faker.name.findName(); // Rowan Nikolaus

const db = mongoose.connection;
const { Schema } = mongoose;

db.on('error', () => console.log('connection error'));

const descriptionSchema = new Schema({
  _id: Number,
  title: String,
  host: { name: String, superhost: Boolean },
  hometype: { guests: Number, beds: Number, baths: Number },
  roomtype: String,
  guestsSay: { type: Map, of: String },
  selfCheckIn: Boolean,
  description: String,
  Amenities: { type: Map, of: [{}] },
  city: String,
  sleepingArrangements: String,
});

const Description = mongoose.model('Description', descriptionSchema);

for (let i = 0; i < 100; i += 1) {
  const randomHometype = faker.random.arrayElement(['entire house', 'entire apartment', 'private room', 'shared room']);
  // eslint-disable-next-line prefer-template
  const randomGuestComments = faker.random.arrayElement([{ 'Great Location': faker.random.number({ min: 80, max: 100 }) + ' % of recent guests gave the location a 5-star rating.' }, { 'Sparkling Clean': faker.random.number({ min: 10, max: 25 }) + ' recent guests said this place was sparkling clean.' }, { 'Great Location': faker.random.number({ min: 80, max: 100 }) + ' % of recent guests gave the location a 5-star rating.', 'Sparkling Clean': faker.random.number({ min: 10, max: 25 }) + ' recent guests said this place was sparkling clean.' }]);

  const 

  Description.create({
    id: faker.random.number({ min: 100000, max: 200000 }),
    title: faker.hacker.phrase(),
    host: { name: faker.internet.userName(), superhost: faker.random.boolean() },
    hometype: {
      hometype: randomHometype, guests: faker.random.number({ min: 1, max: 5 }), beds: faker.random.number({ min: 0, max: 5 }), baths: faker.random.number({ min: 0, max: 5 }) 
    },
    // roomtype: String,
    guestsSay: randomGuestComments,
    selfCheckIn: faker.random.boolean(),
    description: faker.lorem.paragraph(),
    Amenities: { type: Map, of: [{}] },
    city: faker.address.city(),
    sleepingArrangements: String
  })
}



var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard();

console.log(randomName);