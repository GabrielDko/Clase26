const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require("./routes/indexRoutes")
const usersRouter = require("./routes/usersRoutes")
const PORT = 3000;

app.listen(PORT, ()=> console.log(`server running http://localhost:${PORT}`))

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/", indexRouter)
app.use("/users", usersRouter)
