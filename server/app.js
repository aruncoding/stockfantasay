import dotenv from 'dotenv'
dotenv.config() // Make availble all variable created on .env file to access to this page
import express from 'express'
import cors from 'cors'
import connection from './config/connectDb.js'
import UserRoutes from './module/user/routes/userRoutes.js';
import db from './models/index.js'



const app = express()
const port = process.env.PORT

//use JSON to return api in json form
app.use(express.json())

//CORS Policy
app.use(cors());

// Load Routes
app.use("/api/user", UserRoutes)


// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db success...");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db...: " + err.message);
//   });



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})