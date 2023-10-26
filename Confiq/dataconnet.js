
const mongoose = require("mongoose")

require("dotenv").config();
const connectiondb = async () => {

    mongoose.connect(process.env.DATABSE_URL||"mongodb://127.0.0.1:27017/datastore", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(console.log("Db connection succesfully"))
        .catch((error) => {
            console.log("Db Facing connection isssuess")
            console.log(error)
            process.exit(1)
        })


}
module.exports = connectiondb;