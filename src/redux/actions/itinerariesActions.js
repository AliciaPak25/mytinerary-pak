import axios from "axios";

const itinerariesActions = {
    getItineraryByCity: (id) => {
        return async(dispatch, getState)=>{
        const res = await axios.get(`http://localhost:4000/api/itineraries/city/`+id)
        console.log(res)
        dispatch({type: 'getItineraryByCity', payload: res.data.response})
    }
    },

    fetchItineraries: () => {
        return async(dispatch, getState)=>{ 
            const res = await axios.get('http://localhost:4000/api/itineraries')
            dispatch({type: 'fetchItineraries', payload: res.data.response.itineraries})
    }
    },

    fetchOneItinerary: (id)=>{
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/itineraries/'+id)
            dispatch({type: 'fetchOneItinerary', payload: res.data.response})
        }
    },

    deleteItinerary: (id) =>{
        return async(dispatch, getState) => {
            try{
                const res = await axios.delete('http://localhost:4000/api/itineraries/'+id)
                dispatch({type:'deleteItinerary', payload: res.data.response})
            }catch(err){
                console.log(err)
            }
        }
    },

    /* filtrate: (itineraries, value)=>{
        return (dispatch,getState)=>{
            dispatch({type:'filtering', payload:{itineraries, value}})
        }
    }, */

    addNewItinerary: (name,price)=>{
        return async(dispatch,getState)=>{
            const res= await axios.post('http://localhost:4000/api/itineraries',{name,price})
            dispatch({type:'addItinerary', payload: res.data.response})
    
        }
}
}
export default itinerariesActions;