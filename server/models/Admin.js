// make a model for admin username and password only

import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    refreshToken: { type: String, required: false },
});

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;