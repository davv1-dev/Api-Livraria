import mongoose from "mongoose";
async function conectaDataBase(){
    mongoose.connect("mongodb+srv://admin:admin12345@apilivraria.iqevchi.mongodb.net/ApiLivraria?appName=ApiLivraria");
    return mongoose.connection;
}
export default conectaDataBase;