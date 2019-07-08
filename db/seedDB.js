/* eslint-disable max-len */
const faker = require('faker');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/description');

const db = mongoose.connection;
const { Schema } = mongoose;

const descriptionSchema = new Schema({
  _id: Number,
  title: String,
  host: { name: String, superhost: Boolean },
  hometype: { guests: Number, beds: Number, baths: Number },
  roomtype: String,
  guestsSay: { type: Map, of: String },
  selfCheckIn: Boolean,
  description: String,
  Amenities: { type: Map, of: {} },
  city: String,
  sleepingArrangements: String,
});

const Description = mongoose.model('Description', descriptionSchema);
const homeTypes = ['entire house', 'entire apartment', 'private room', 'shared room'];
// eslint-disable-next-line prefer-template
const guestComments = {
  // eslint-disable-next-line prefer-template
  'Great Location': faker.random.number({ min: 80, max: 100 }) + ' % of recent guests gave the location a 5-star rating.',
  // eslint-disable-next-line prefer-template
  'Sparkling Clean': faker.random.number({ min: 10, max: 25 }) + ' recent guests said this place was sparkling clean.',
  // eslint-disable-next-line prefer-template
  'Great Check-in experience': faker.random.number({ min: 80, max: 100 }) + ' % of recent guests gave the check-in process a 5-star rating.',
};
/* amenity types */
const basic = {
  wifi: 'Continuous access in the listing',
  'Laptop friendly workspace': 'A table or desk with space for a laptop and a chair that’s comfortable to work in',
  essentials: 'Towels, bed sheets, soap, and toilet paper',
};

const dining = {
  kitchen: 'Space where guests can cook their own meals',
  'coffee maker': 'coffee maker',
  'cooking basics': 'Pots and pans, oil, salt and pepper',
};
const notIncluded = ['air conditioning', 'private entrance'];

const getRandomObjectElements = (obj) => {
  const elements = {};
  const entries = Object.entries(obj);
  const numOfElements = faker.random.number(entries.length);
  for (let i = 0; i < numOfElements; i += 1) {
    const element = faker.random.arrayElement(entries);
    const [key, value] = element;
    elements[key] = value;
  }
  return elements;
};

async function seedDB() {
  const documents = [];
  for (let i = 0; i < 100; i += 1) {
    documents.push(Description.create({
      id: faker.random.number({ min: 100000, max: 200000 }),
      title: faker.hacker.phrase(),
      host: { name: faker.internet.userName(), superhost: faker.random.boolean() },
      hometype: {
        hometype: faker.random.arrayElement(homeTypes), guests: faker.random.number({ min: 1, max: 5 }), beds: faker.random.number({ min: 0, max: 5 }), baths: faker.random.number({ min: 0, max: 5 }) 
      },
      guestsSay: getRandomObjectElements(guestComments),
      selfCheckIn: faker.random.boolean(),
      description: faker.lorem.paragraph(),
      Amenities: { basic: getRandomObjectElements(basic), dining: getRandomObjectElements(dining), notIncluded: getRandomObjectElements(notIncluded) },
      city: faker.address.city(),
      sleepingArrangements: String,
    }));
  }
  await Promise.all(documents);
}
db.on('error', () => console.log('connection error'));
db.once('open', () => seedDB());
