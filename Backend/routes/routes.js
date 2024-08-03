const express = require('express');
const routes = express.Router();

// JSON
routes.use(express.json());

routes.get("/", (req, res) => {
  return res.send("Teste de app");
});

routes.get("/videos", (req, res) => {
  return res.send("Teste de videos");
});

routes.post("/auth/register", (req, res) => {
  const { nome, email, confirm_senha, senha } = req.body;

  console.log(nome, email, confirm_senha,senha)
  if (!nome) {
    return res.status(422).json({ msg: "O campo nome não pode estar vazio" });
  }

  if (!email) {
    return res.status(422).json({ msg: "O campo email não pode estar vazio" });
  }

  if (!senha) {
    return res.status(422).json({ msg: "O campo senha não pode estar vazio" });
  }

  if (!confirm_senha) {
    return res.status(422).json({ msg: "O campo confirmar email não pode estar vazio" });
  }

  // Lógica adicional para lidar com o registro
   
  if (senha != confirm_senha){
    return res.status(422).json({ msg: "As senhas são diferentes " });
  }


});

module.exports = routes;
