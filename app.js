
import express  from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import {errorMiddleware} from "./middlewares/error.js"
import cors from "cors";
import router from "./routes/user.js";

export const app = express();
const router = express.Router();



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


router.get("/", (req, res) => {
   res.setHeader("Access-Control-Allow-Origin", "*")
   res.setHeader("Access-Control-Allow-Credentials", "true");
   res.setHeader("Access-Control-Max-Age", "1800");
   res.setHeader("Access-Control-Allow-Headers", "content-type");
   res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    });

//THIS WIll executer when there is error in the code
app.use(errorMiddleware)


