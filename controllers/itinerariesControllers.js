const ItineraryControl = require('../models/itinerariesModel')

const itineraryController = {

    consultAllItineraries: async (req, res)=>{
        let itineraries
        let error = null

        try{
            itineraries = await ItineraryControl.find().populate('city')
        }catch(err){
            error = err
            console.log(error);
        }
        res.json({
            response: error ? 'ERROR' : {itineraries},
            success: error ? false : true,
            error: error
        })
    },
    consultItinerariesFromAParticularIDCity: async(req,res)=>{
        try {
            
            const itinerariesOneCity = await ItineraryControl.find({city:req.params.id}).populate('comments.userId')
            res.json({response: itinerariesOneCity, success:true})

        } catch (error) {
            console.log(error);
        }
    },
    consultOneItineraryByItsId: async (req, res)=>{
    
        let OneId;
        let id = req.params.id
        try{
            OneId = await ItineraryControl.findOne({_id:id})
        }catch(err){
            console.log(err);
        }
        res.json({
            success: true, response: OneId
        })
    
    },
    addNewItinerary: async (req, res)=>{
        const {name, image, price, duration, likes, hashtag1, hashtag2, hashtag3, hashtag4, comments, city} = req.body
        new ItineraryControl({name, image, price, duration, likes, hashtag1, hashtag2, hashtag3, hashtag4, comments, city}).save()
            .then((response) => res.json({success: true, response: response}))
            .catch((error)=> res.json({success: false, response: error}))
    },
    modifyItinerary: async (req, res)=>{
        const id = req.params.id
        const itinerary = req.body
        let itinerarydb

        try{
            itinerarydb = await ItineraryControl.findOneAndUpdate({_id:id}, itinerary, {new: true})
        }catch(error){
            console.log(error)
        }
        res.json({success: true, response: itinerarydb})
    },
    deleteItinerary: async (req,res)=>{
        const id = req.params.id
        let itinerary
        
        try{
        itinerary = await ItineraryControl.findOneAndDelete({_id:id})
        }
        catch(error){
            console.log(error)
        }
        res.json({success: true, itinerary: "itinerary deleted", response: itinerary})
    },
    likesAndDislikes: async (req, res) => {

        const id = req.params.id;
        const user = req.user.id;

        await ItineraryControl.findOne({_id:id})

        .then((itineraries) =>{
            if (itineraries.likes.includes(user)) {
                ItineraryControl.findOneAndUpdate({_id:id}, {$pull: {likes: user}}, {new: true})
                .then((unliked) => res.json({success: true, response: unliked.likes}))
                .catch((error) => console.log(error))
            }else{
                ItineraryControl.findOneAndUpdate({_id:id}, {$push: {likes: user}}, {new: true})
                .then((liked) => res.json({success: true, response: liked.likes}))
                .catch((error) => console.log(error))
            }
        })
        .catch((error) => res.json({success: false, response: error}))
    }
} 
module.exports = itineraryController