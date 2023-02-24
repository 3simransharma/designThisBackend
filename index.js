const express = require("express")
const app = express();
const env = require("dotenv");
const connectDatabase = require("./config/database");
const cors = require('cors');
const design = require("./route/DesignRoute");
const path = require("path");


//Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Rejection`);
    process.exit(1);
});

//Unhandled Promise Rejection
//when the connection string is written in wrong way
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down the Server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});

//Config
if(process.env.NODE_ENV !== "PRODUCTION"){
    env.config();
}
// app.get("/",(req,res,next)=>{
//     res.status(200).json({
//         message:"Hello from Server. This is Home Page from Backend"
//     });
// });

app.use(express.json());
app.use(cors());
app.use(design);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//Connecting to Database
connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});