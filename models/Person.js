const mongoose = require("mongoose");

const Person = mongoose.model("Person", {
  nome: String,
  telefone: Number,
  cargo: String,
});

module.exports = Person;
