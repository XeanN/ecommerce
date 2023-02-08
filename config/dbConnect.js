const { default: mongoose} = require("mongoose");

const dbConnect = () =>{
    try {
        mongoose.set("strictQuery", false);
        console.log(process.env.MONGODB_URL);
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected Succesfully");
    } catch (error) {
        console.log("Database error");
    }
}

module.exports = dbConnect;