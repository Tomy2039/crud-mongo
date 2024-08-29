import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/crud');
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
    }
}
