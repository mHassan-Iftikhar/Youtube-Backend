import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from './app.js'
dotenv.config({ path: './.env' });



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at PORT : ${process.env.PORT}`);
        app.on("error", (err) => {
            console.log("Error", err);
            throw err
        })
    })
})
.catch((err) => {
    console.log(`Error connecting with PORT ${err}`);
    throw err
});




















// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (err) => {
//             console.log("Error: ", err);
//             throw err;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on Port ${process.env.PORT}`);
//         })

//     } catch(err) {
//         console.error("Error: ", err);
//         throw err;
//     }
// })()