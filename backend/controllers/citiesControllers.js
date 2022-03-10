const CitiesControl = require('../models/citiesModel')

const citiesController = {

    obtainCities: async (req, res)=>{
        let cities
        let error = null

        try{
            cities = await CitiesControl.find()
        }catch(err){
            error = err
            console.log(error);
        }
        res.json({
            response: error ? 'ERROR' : {cities},
            success: error ? false : true,
            error: error
        })
    },
    addACity: async (req, res)=>{
        console.log(req.body)
        const {name, image, country, description} = req.body
        new CitiesControl({name,
                    image,
                    country,
                    description}).save()
            .then((response) => res.json({success: true, response: response}))
            .catch((error)=> res.json({success: false, response: error}))
    },
    deleteACity: async (req,res)=>{
        const id = req.params.id
        let city 
        
        try{
        city = await CitiesControl.findOneAndDelete({_id:id})
        }
        catch(error){
            console.log(error)
        }
        res.json({success: true, city: "city deleted", response: city})
    },
    modifyACity: async (req, res)=>{
        const id = req.params.id
        const city = req.body
        let citydb

        try{
            citydb = await CitiesControl.findOneAndUpdate({_id:id}, city, {new: true})
        }catch(error){
            console.log(error)
        }
        res.json({success: true, response: citydb})

        
        console.log(citydb)
    },
    getASpecificCityByItsId: async (req, res)=>{
    
        let specificId;
        let id = req.params.id
        try{
            specificId = await CitiesControl.findOne({_id:id})
        }catch(err){
            console.log(err);
        }
        res.json({
            success: true, response: specificId
        })
    
    }
} 
module.exports = citiesController