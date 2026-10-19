const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose")
mongoose
.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.log("Erreur MongoDB :", err.message));
app.get("/", (req, res) => {
    res.send("Hello from backend");
});
const port = process.env.PORT
app.listen(port, () => 
    {
console.log("Server running on port " +port);
});
