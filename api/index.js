const app = require("../server/src/app");
const connectDB = require("../server/src/config/db");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: require("path").resolve(__dirname, "../server/.env") });
}

// Vercel Serverless Function entry point
module.exports = async (req, res) => {
  try {
    await connectDB();
    return app(req, res);
  } catch (error) {
    console.error("Vercel Function Error:", error);
    res.status(500).json({ 
      message: "Internal Server Error", 
      errorDetail: error ? error.message : String(error),
      hasDbUri: !!process.env.MONGODB_URI
    });
  }
};
