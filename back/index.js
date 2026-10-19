const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose")
const cors = require("cors");
const Client = require("./models/Client");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.log("Erreur MongoDB :", err.message));
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello from backend");
});
app.get("/api/clients", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

app.post("/api/clients", async (req, res) => {
  const client = await Client.create(req.body);
  res.json(client);
});
const port = process.env.PORT
app.listen(port, () => 
    {
console.log("Server running on port " +port);
});
