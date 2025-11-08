import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/db";
import epfRoutes from "./Routes/epfRoute";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ CORS with environment support
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;

// ✅ EPF Routes
app.use("/api/epf", epfRoutes);

// 🟢 Connect Database and Start Server
AppDataSource.initialize()
  .then(() => {
    console.log("✅ Database connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ DB Connection Error:", err));
