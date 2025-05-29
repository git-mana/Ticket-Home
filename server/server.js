 
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// import authRoutes from "./routes/authRoutes.js";
// import ticketRoutes from "./routes/ticketRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/tickets", ticketRoutes);
// app.use("/api/orders", orderRoutes);

// DB Connect + Listen
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Server running on ${process.env.PORT}`)
  );
});