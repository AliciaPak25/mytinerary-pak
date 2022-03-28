const ItinerariesControl = require('../models/itinerariesModel')

const commentsController = {
    addComment: async (req, res) => {
        const {itinerary, comment} = req.body.comment
        const user = req.user._id

        try{
            const newComment = await ItinerariesControl.findOneAndUpdate({_id: itinerary}, {$push: {comments: {comment: comment, userId: user}}}, {new: true}).populate("comments.userId", {photoURL: 1, firstName: 1, lastName: 1})
            res.json({success: true, response: {newComment}, message: "Thank you for leaving your comment"})
        }catch(error){
            console.log(error)
            res.json({success: false, message: "Something went wrong. Try again in a few seconds."})
        }
    },

    modifyComment: async (req, res) => {
        const {comment} = req.body
        const user = req.user._id

        try {
            const newComment = await ItinerariesControl.findOneAndUpdate({"comments._id": req.params.id}, {$set: {"comments.$.comment": comment}}, {new: true}).populate("comments.userId", {photoURL: 1, firstName: 1, lastName: 1})
            newComment.save()
            res.json({success: true, response: {newComment}, message: "Your comment has been modified"})
        } catch (error) {
            console.log(error)
            res.json({success: true, message: "Something went wrong. Try again in a few seconds."})
        }
    },

    deleteComment: async (req, res) => {
        const id = req.params.id
        const user = req.user._id

        try {
            const deleteComment = await ItinerariesControl.findOneAndUpdate({"comments._id": id}, {$pull: {comments: {_id: id}}},  {new: true}).populate("comments.userId", {photoURL: 1, firstName: 1, lastName: 1})
            deleteComment.save()
            res.json({success: true, response: {deleteComment}, message: "This comment has been removed"})
        } catch (error) {
            console.log(error)
            res.json({success: false, message: "Something went wrong. Try again in a few seconds."})
        }
    }
}
module.exports = commentsController