const Contato = require("../models/ContatoModel");

exports.index = async (req, res) => {
  const contatos = await Contato.buscaContatos();
  res.render("index", { contatos });
};

exports.index = async (req, res) => {
  let contatos = [];

  if (req.session.user) {
    contatos = await Contato.buscaContatos();
  }

  res.render("index", { contatos });
};