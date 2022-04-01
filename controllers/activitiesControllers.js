const ActivitiesControl = require('../models/activitiesModel')

const activitiesController = {

    obtainActivities: async (req, res)=>{
        let activities
        let error = null

        try{
            activities = await ActivitiesControl.find().populate('itinerary')
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
    addActivities: async (req, res)=>{
        const {activityName, activityImage, itineraryId} = req.body
        new ActivitiesControl({activityName,
                    activityImage,
                    itineraryId}).save()
            .then((response) => res.json({success: true, response: response}))
            .catch((error)=> res.json({success: false, response: error}))
    },
    deleteActivities: async (req,res)=>{
        const id = req.params.id
        let activity 
        
        try{
        activity = await ActivitiesControl.findOneAndDelete({_id:id})
        }
        catch(error){
            console.log(error)
        }
        res.json({success: true, activities: "activity deleted", response: activity})
    },
    modifyActivities: async (req, res)=>{
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
    getSomeSpecificActivitiesByItsId: async (req, res)=>{
    
        let specificId;
        let id = req.params.id
        console.log(id)
        try{
            specificId = await ActivitiesControl.findOne({_id:id})
        }catch(err){
            console.log(err);
        }
        res.json({
            success: true, response: specificId
        })
    
    },
    getActivitiesFromAParticularIDItinerary: async(req,res)=>{
        try {
            const activitiesOfOneItinerary = await ActivitiesControl.find({itineraryId:req.params.itineraryId})
            res.json({response: activitiesOfOneItinerary, success:true})

        } catch (error) {
            console.log(error);
            res.json({response: error.message, success: false})
        }
    },
} 
module.exports = activitiesController