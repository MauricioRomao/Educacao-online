const routes = require ("express").Router()

routes.get("/", (req, res)=>{

    return res.send(" Teste de app " )

})





module.exports= routes