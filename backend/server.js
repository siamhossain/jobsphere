require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
// import authRoutes from "./routes/authRoutes.js";
const authRoutes = require("./routes/authRoutes");


connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});