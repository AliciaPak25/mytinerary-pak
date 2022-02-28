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
        const {name, image, country, description} = req.body.dataInput 
        new Cities({name: name,
                    image: image,
                    country: country,
                    description: description}).save()
            .then((answer) => res.json({answer}))
    },
    deleteACity: async (req,res)=>{
        const id = req.params.id
        
        await Cities.findOneAndDelete({_id:id})
    },
    modifyACity: async (req, res)=>{
        const id = req.params.id
        const city = req.body.dataInput

        let citydb = await Cities.findOneAndUpdate({_id:id}, city)
        console.log(citydb)
    },
    getASpecificCityByItsId: async (req, res)=>{
        let id = "621be57736989724fa521837"
        error = null
        let specificId;

        try{
            specificId = await Cities.findById(id)
        }catch(err){
            error = err
            console.log(error);
        }
        res.json({
            response: error ? 'ERROR' : {id},
            success: error ? false : true,
            error: error
        })
      
    }
}

module.exports = citiesController