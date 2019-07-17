const mongoose = require('mongoose');

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
  amenities: { type: Map, of: {} },
  city: String,
  sleepingArrangements: String,
});

const Description = mongoose.model('Description', descriptionSchema);

module.exports = Description;
