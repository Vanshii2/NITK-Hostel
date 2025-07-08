import mongoose from 'mongoose';

const peopleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  alt: { type: String },
  designation: { type: String, required: true },
  role: { type: String, enum: ['staff', 'supervisor', 'warden'], required: true },
  phone: { type: String },
  email: { type: String },
  contact: { type: String }
});

const People = mongoose.model('People', peopleSchema);
export default People; 
