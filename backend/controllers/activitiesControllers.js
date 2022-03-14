/* const ActivitiesControl = require('../models/activitiesModel')

const activitiesController = {

    obtainActivities: async (req, res)=>{
        let activities
        let error = null

        try{
            activities = await ActivitiesControl.find()
        }catch(err){
            error = err
            console.log(error);
        }
        res.json({
            response: error ? 'ERROR' : {activities},
            success: error ? false : true,
            error: error
        })
    },
    addAnActivity: async (req, res)=>{
        const {name, image, country, description} = req.body
        new ActivitiesControl({name,
                    image,
                    country,
                    description}).save()
            .then((response) => res.json({success: true, response: response}))
            .catch((error)=> res.json({success: false, response: error}))
    },
    deleteAnActivity: async (req,res)=>{
        const id = req.params.id
        let activity 
        
        try{
        city = await ActivitiesControl.findOneAndDelete({_id:id})
        }
        catch(error){
            console.log(error)
        }
        res.json({success: true, activities: "activity deleted", response: activity})
    },
    modifyAnActivity: async (req, res)=>{
        const id = req.params.id
        const activity = req.body
        let activitydb

        try{
            activitydb = await ActivitiesControl.findOneAndUpdate({_id:id}, activity, {new: true})
        }catch(error){
            console.log(error)
        }
        res.json({success: true, response: activitydb})

    },
    getAnSpecificActivityByItsId: async (req, res)=>{
    
        let specificId;
        let id = req.params.id
        try{
            specificId = await ActivitiesControl.findOne({_id:id})
        }catch(err){
            console.log(err);
        }
        res.json({
            success: true, response: specificId
        })
    
    }
} 
module.exports = activitiesController */