import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import adminRouter from "./routes/adminRoute.js";

//app config
const app = express();
const port = process.env.PORT || 3000;
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/admin", adminRouter);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`App is listening at port: ${port}`);
});
