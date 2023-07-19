const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('Base de datos conectada')
        
    } catch {
        console.log('No se pudo establecer una coneccion')
    }
};

module.exports = {connect};