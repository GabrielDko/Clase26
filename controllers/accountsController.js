const fs = require("fs")
const accountsController = {
    showUsers: (req,res)=>{
        const jsonUsers = fs.readFileSync(__dirname, "../database/user.json", "utf-8")
        const users = JSON.parse(jsonUsers)
        res.render("accounts", {users} )
    }
}

module.exports = accountsController;