import axios from "axios";

const itinerariesActions = {
    getItineraryByCity: (id) => {
        return async(dispatch, getState)=>{
        const res = await axios.get(`https://mytinerary-pak.herokuapp.com/api/itineraries/city/`+id)
        dispatch({type: 'getItineraryByCity', payload: res.data.response})
    }
    },

    fetchItineraries: () => {
        return async(dispatch, getState)=>{ 
            const res = await axios.get('https://mytinerary-pak.herokuapp.com/api/itineraries')
            dispatch({type: 'fetchItineraries', payload: res.data.response.itineraries})
    }
    },

    fetchOneItinerary: (id)=>{
        return async (dispatch, getState) => {
            const res = await axios.get('https://mytinerary-pak.herokuapp.com/api/itineraries/'+id)
            return res
        }
    },

    deleteItinerary: (id) =>{
        return async(dispatch, getState) => {
            try{
                const res = await axios.delete('https://mytinerary-pak.herokuapp.com/api/itineraries/'+id)
                dispatch({type:'deleteItinerary', payload: res.data.response})
            }catch(err){
                console.log(err)
            }
        }
    },

    addNewItinerary: (name,price)=>{
        return async(dispatch,getState)=>{
            const res= await axios.post('https://mytinerary-pak.herokuapp.com/api/itineraries',{name,price})
            dispatch({type:'addItinerary', payload: res.data.response})
    
        }
    },

    likesAndDislikes: (itineraryId) => {
        const token = localStorage.getItem('token')
        return async() => {
            try {
                let response = await axios.put(`https://mytinerary-pak.herokuapp.com/api/itineraries/likes&dislikes/${itineraryId}`, {},
                {headers:{
                    Authorization: "Bearer "+token
                    }
                })
                return response
            }catch(error){
                console.log(error)
            }
        }
    }
}
export default itinerariesActions;