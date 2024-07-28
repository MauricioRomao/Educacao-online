const express = require("express")
const App = express()


// importar routas 
App.use(require("./routes/routes.js"))








App.listen(3000, console.log("http://localhost:3000")) 
