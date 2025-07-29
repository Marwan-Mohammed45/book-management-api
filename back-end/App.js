import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./data/connectToDB.js";
import bookRoutes from "./routes/book.routes.js";
import authRouts from "./routes/auth.routes.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectToDB();
app.use("/api", bookRoutes);
app.use("/api",authRouts)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
