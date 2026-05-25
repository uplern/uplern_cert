const mongoose = require("mongoose");

let cached = global.mongoose;
let listenersAttached = false;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is missing in environment variables.");
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: Number(process.env.MONGO_SERVER_SELECTION_TIMEOUT_MS || 10000),
      socketTimeoutMS: Number(process.env.MONGO_SOCKET_TIMEOUT_MS || 45000),
    };

    cached.promise = mongoose.connect(uri, opts).then((mongooseInstance) => {
      console.log("New MongoDB connection established");
      if (!listenersAttached) {
        listenersAttached = true;
        mongoose.connection.on("connected", () => console.log("MongoDB connected"));
        mongoose.connection.on("disconnected", () => console.warn("MongoDB disconnected"));
        mongoose.connection.on("reconnected", () => console.log("MongoDB reconnected"));
        mongoose.connection.on("error", (err) => console.error("MongoDB runtime error:", err.message));
      }
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("MongoDB Connection Error:", e);
    throw e;
  }

  return cached.conn;
};

module.exports = connectDB;
