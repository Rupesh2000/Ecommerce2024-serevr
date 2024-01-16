import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Ecommerce App 2024</h1>");
});

//PORT
const PORT = process.env.PORT_URL || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server is rumming on ${process.env.DEV_MODE} mode on http://localhost:${PORT}`
      .bgCyan.white
  );
});
