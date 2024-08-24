// backend/models/userTwoModel.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userTwoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    pin: { type: String, required: true },
    password: { type: String, required: true },
});

userTwoSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// export default mongoose.model('UserTwo', userTwoSchema);


const UserTwo = mongoose.model('UserTwo', userTwoSchema);
export default UserTwo;