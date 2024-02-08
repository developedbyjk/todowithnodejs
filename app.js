
import express  from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import {errorMiddleware} from "./middlewares/error.js"
import cors from "cors";

export const app = express();


config({
   path: "./data/config.env",
 });

//middleware
app.use(express.json());
app.use(cookieParser());
//we nee to use
//now we can use all the routes in userRouter with /users prefix 
//the generatl term used for api testing is using /api/v1 in front
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);
app.use(cors({
   // origin: [process.env.FRONTEND_URL],
   // origin:' https://todo-react-side.vercel.app',
   origin:'http://127.0.0.1:5173',
   

    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));



// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));





app.get("/", (req, res) => {
   res.send("Hello Worjhld");
});

//THIS WIll executer when there is error in the code
app.use(errorMiddleware)


