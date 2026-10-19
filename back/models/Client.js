const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  nom: String,
  email: String,
  telephone: String,
});

module.exports = mongoose.model("Client", clientSchema);