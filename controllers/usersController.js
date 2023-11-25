
const { json } = require("body-parser")
const fs = require("fs")
const usersController = {
    login:(req,res)=>{
        res.render("login")
    },
    register:(req,res)=>{
        res.render("register")
    }
}

module.exports = usersController;