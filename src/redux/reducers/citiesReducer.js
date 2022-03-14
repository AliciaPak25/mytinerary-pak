const initialState = {
    cities:[],
    auxiliar:[],
    filteredCities:[],
    city:[],
}

const citiesReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'fetch':
            return {
                ...state,
                cities: action.payload,
                filteredCities: action.payload
            }
            
        case 'delete':
            return {
                ...state,
                cities: action.payload,
            }

        case 'addCity':
            let cities = [...state.cities]
            cities.push(action.payload)
            return {
                ...state,
                cities,
                auxiliar:[...cities]
            }

        case 'filtrate':
            const filtered = action.payload.cities.filter((city => city.name.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))

            return{
                ...state,
                filteredCities: filtered
            }
            
            case 'fetchOneCity':
                return{
                    ...state,
                    city: action.payload
                }
            case 'findOne':
                const findId = action.payload.cities.find(city=> city._id === action.payload.id)

                return{
                    ...state,
                    city: findId
                }
        default:
            return state
    }
}

export default citiesReducer;