const initialState = {
    countriesApi: [],
    filterCountriesApi: [],
    auxiliar: []
}

const countriesDataReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case 'fetch':
            return {
                ...state,
                countriesApi: action.payload,
                filterCountriesApi: action.payload,
                auxiliar: action.payload,
            }

        case 'filter':
            const filtered = action.payload.countriesApi.filter((countries => countries.country.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))
            return {
                ...state,
                filterCountriesApi: filtered
            }

        default:
            return state
    }
}
export default countriesDataReducer