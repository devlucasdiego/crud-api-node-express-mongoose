const router = require("express").Router();

const Person = require("../models/Person");

// ROTAS API

//Rota inicial - Endpoint
router.get("/", (req, res) => {
  res.json({ message: "Hi Express!" });
});

// CREATE
router.post("/", async (req, res) => {
  const { nome, telefone, cargo } = req.body;

  if (!nome) {
    res.status(422).json({
      error:
        "O nome é obrigatório! A requisição está bem formada mas inabilitada para ser seguida devido a erros semânticos.",
    });
    return;
  }
  const person = {
    nome,
    telefone,
    cargo,
  };

  try {
    //criando dados
    await Person.create(person);

    res.status(201).json({
      message:
        "A requisição foi bem sucedida e um novo recurso foi criado como resultado!",
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
  if (!person) {
    res.status(422).json({
      message: "Usuário não encontrado!",
    });
    return;
  }
});

// Extrair dados da requisição, pela url = req.params
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const person = await Person.findOne({
      _id: id,
    });

    if (!person) {
      res.status(422).json({
        message:
          "Usuário não encontrado! A requisição está bem formada mas inabilitada para ser seguida devido a erros semânticos.",
      });
      return;
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

// Atualização de dados (PUT - PATCH)
router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { nome, telefone, cargo } = req.body;

  const person = {
    nome,
    telefone,
    cargo,
  };

  try {
    const updatedPerson = await Person.updateOne({ _id: id }, person);

    if (updatedPerson.matchedCount === 0) {
      res.status(422).json({
        message:
          "Usuário não encontrado! A requisição está bem formada mas inabilitada para ser seguida devido a erros semânticos.",
      });
      return;
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
