
import express  from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import { config } from "dotenv";


export const app = express();
config({path:"./config.env"});

//middleware
app.use(express.json());
//we nee to use
//now we can use all the routes in userRouter with /users prefix 
app.use("/users",userRouter);


app.get("/", (req, res) => {
   res.send("Hello World");
});


