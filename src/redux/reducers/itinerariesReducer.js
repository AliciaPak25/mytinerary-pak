const initialState = {
    itineraries: [],
    auxiliar: []
}

const itinerariesReducer = (state = initialState, action) => {

    switch(action.type){
        case 'getItineraryByCity':
            return {
                ...state,
                itineraries: action.payload,
            }
        
        case 'fetchItineraries':
            return {
                ...state,
                itineraries: action.payload,
                auxiliar: action.payload
            }
                
        case 'deleteItinerary':
            return {
                ...state,
                itineraries: action.payload,
                }
    
        case 'addItinerary':
            let itineraries = [...state.itineraries]
            itineraries.push(action.payload)
            return {
                ...state,
                itineraries,
                auxiliar:[...itineraries]
            }
    
        case 'fetchOneItinerary':
            return{
                ...state,
                itineraries: action.payload
            }
        default:
        return state
    }
}
export default itinerariesReducer;

