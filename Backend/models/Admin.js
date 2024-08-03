const mongoose= require("mongoose")

const Admin = mongoose.model("Admin", {
    nome:String,
    email:String,
    password:String
}) 



module.exports = Admin
