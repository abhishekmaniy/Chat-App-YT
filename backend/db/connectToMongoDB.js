import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to Mongodb");
    } catch (error) {
        console.log("Error connecting to MongoDB." , error.message);
    }
}

export default connectToMongoDB;