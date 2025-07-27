const mongoose = require("mongoose"); ///import
require("dotenv").config();

//function for connecting the database
const connectToDb = async () => {
    try {
        // console.log(process.env.DB_CONNECTION_STRING);
        const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log(`Databse Connected: ${connect.connection.name}`);
    } catch (error) {
        console.error(`Database Connection failed \n${error}`); //instead of log its better to put .error as it desplays an error
    }
};

module.exports = connectToDb;