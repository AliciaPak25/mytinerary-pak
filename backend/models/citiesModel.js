const mongoose = require('mongoose'); //mongoose es un contructor, construye un modelo de conexion con la base de datos

const citiesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    country: {type: String, required: true},
    description: {type: String, required: true},
});
//establecemos la coleccion y los datos
const CitiesModel = mongoose.model('cities', citiesSchema);

module.exports = CitiesModel;