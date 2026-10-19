const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.get("/", (req, res) => {
    res.send("Hello from backend");
});
const port = process.env.PORT
app.listen(port, () => 
    {
console.log("Server running on port " +port);
});
