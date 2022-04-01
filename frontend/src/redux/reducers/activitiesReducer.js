const initialState = {
    activities: [],
}

const activitiesReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetchActivities':
            return {
                ...state,
                activities: action.payload,
            }
        
        case 'getActivitiesByItinerary':
            return {
                ...state,
                activities: action.payload,
            }
            
        case 'fetchOnlyOne':
            return{
                ...state,
                activities: action.payload
            }
        
        default:
            return state
    }
}
export default activitiesReducer;
