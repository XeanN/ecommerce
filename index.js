const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require("./config/dbConnect.js");
const { notFound, errorHandler } = require('./middlewares/errorHandler.js');
const app = express();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute.js");
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use("/api/user", authRouter)

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})