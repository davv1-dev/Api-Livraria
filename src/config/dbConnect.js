import mongoose from "mongoose";
console.log(process.env.DB_CONNECTION_STRING);
async function conectaDataBase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}
export default conectaDataBase;