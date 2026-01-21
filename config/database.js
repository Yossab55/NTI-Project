const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("⏳ Trying to connect to MongoDB...");

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");
    console.log(`📊 Database Name: ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
  }
};
// حاجة اتعلمتها لسه من قريب
// conn.on('error', (error) => {console.log(error); } 
// maybe after connection is done error comes after this
// حاجة كده عاملة زي انت معاك محل وفتحته خلاص وشغال بقي عادي بس ممكن يتطلعلك مشكلة جوا السطر ده بقي هو الي بيورك المشكلة فين 
// ممكن في البداية تطبع وممكن تعمل log system علشان الظروف دي
module.exports = connectDB;
