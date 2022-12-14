const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");


dotenv.config();
const app = express();

mongoose.connect(process.env.MONGOOSE_URL,() =>{
    console.log("Ket noi Db thanh cong");
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/v1/auth",authRoute);
app.use("/v1/user",userRoute);

app.listen(8000,() => {
    console.log("Server is running...");
})