import axios from "axios";

const activitiesActions = {
    fetchActivities: () => {
        return async(dispatch, getState)=>{ 
            const answer = await axios.get('http://localhost:4000/api/activities')
            dispatch({type: 'fetchActivities', payload: answer.data.response.activities})
    }
    },

    getActivitiesByItinerary: (id) => {
        console.log(id)
        return async(dispatch, getState)=>{
        const answer = await axios.get(`http://localhost:4000/api/activities/itinerary/`+id)
        console.log(answer)
        dispatch({type: 'getActivitiesByItinerary', payload: answer.data.response})
    }
    },

    fetchOnlyOne: (id)=>{
        return async (dispatch, getState) => {
            const answer = await axios.get('http://localhost:4000/api/activities/'+id)
            dispatch({type: 'fetchOnlyOne', payload: answer.data.response})
        }
    },

    activityPerItinerary: (itineraryId) => {
        return async() =>{
            try {
                const response = await axios.get('http://localhost:4000/api/activities/itinerary/'+itineraryId)
                return{success: true, response: response.data.response}
            } catch (error) {
                return{success: false, response: error.message}
            }
        }
    }
}

export default activitiesActions;