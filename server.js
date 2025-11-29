const express = require("express");
require("dotenv").config();

console.log("DEBUG ENV CHECK →", {
  PG_USER: process.env.PG_USER,
  PG_DATABASE: process.env.PG_DATABASE,
  PG_PASSWORD: process.env.PG_PASSWORD,
  PORT: process.env.PORT
});

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Routes
const transactionsRoute = require("./routes/transactions");
app.use("/api/transactions", transactionsRoute);

app.get("/", (req, res) => {
  res.send("Finance Tracker Backend Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

