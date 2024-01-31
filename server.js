import {app} from "./app.js"
import {connectDB} from "./data/database.js";

connectDB();
//process.env.PORT
// app.listen(process.env.PORT, () => {
//     console.log(process.env.PORT);
//     console.log("Server running on port 5000");
// });

app.listen(process.env.PORT, () => {
    console.log(`SEVER IS WORKING ON PORT ${process.env.PORT} IN ${process.env.NODE_ENV} MODE`);
});