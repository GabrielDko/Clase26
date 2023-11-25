
const { json } = require("body-parser")
const fs = require("fs")
const usersController = {
    login:(req,res)=>{
        res.render("login")
    },
    register:(req,res)=>{
        res.render("register")
    },
    showUsers: (req,res)=>{
        const jsonUsers = fs.readFileSync(__dirname, "../database/user.json", "utf-8")
        const users = JSON.parse(jsonUsers)
        res.render("login",{users} )
    }
}

module.exports = usersController;