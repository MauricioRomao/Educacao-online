const express = require("express")
const App = express()
const mongoose = require ( "mongoose");
const Admin = require("./models/Admin.js");


require('dotenv').config();

//models
const Admin_model = require ("./models/Admin.js")

// importar routas 
App.use(require("./routes/routes.js"))

App.use(Admin_model)



const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;


if (!DB_USER || !DB_PASS) {
  console.error('Usuário ou senha não definidos nas variáveis de ambiente .env');
  process.exit(1);
}


const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@bancodeteste.nqzgug4.mongodb.net/?retryWrites=true&w=majority`;


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB Atlas com sucesso!'))
  .catch((erro) => console.error('Erro ao conectar ao MongoDB Atlas:', erro));




App.listen(3000, console.log("http://localhost:3000")) 
