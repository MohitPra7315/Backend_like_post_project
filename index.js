
const express = require("express");
const app = express()

require("dotenv").config();
const PORT = process.env.PORT||3000;

// // middleware for get body data
app.use(express.json());

const blog=require("./Routes/blogroute")

// // mount
app.use("/api/v1", blog);

const dbconnect = require("./Confiq/dataconnet")
dbconnect();

// app on the listen on port
app.listen(PORT, () => {
    console.log(`App is sucessfly run on ${PORT}`)
})
console.log("working upto here")

app.get("/", (req, res) => {
    res.send(`<h1>This our home page</h1>`)

})
console.log("working fonsih")