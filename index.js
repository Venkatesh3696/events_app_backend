import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import {
  loginController,
  signupController,
} from "./controllers/auth.controller.js";
import eventsRouter from "./routes/events.route.js";
import { connectDB } from "./config/mongoDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/register", signupController);
app.post("/login", loginController);

app.use("/api/v1/events", eventsRouter);

const connectDbAndServer = () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`app is listening at port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDbAndServer();
