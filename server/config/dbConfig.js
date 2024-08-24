import mongoose from 'mongoose';

const MONGODB_URI = `mongodb+srv://pandeykaran1515:k8ShCsf0x59MYAgs@cluster0.mv4ht.mongodb.net/`;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, { 
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
