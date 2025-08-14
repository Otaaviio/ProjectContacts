const Contato = require("../models/ContatoModel");

exports.index = async (req, res) => {
  let contatos = [];
  if (req.session.user) {
    contatos = await Contato.buscaContatos(req.session.user._id);
  }
  res.render("index", { contatos });
};
