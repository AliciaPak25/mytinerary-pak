import axios from "axios";

const citiesAction = {
    fetchCities: () => {
        return async(dispatch, getState)=>{ await axios.get(`http://localhost:4000/api/cities`)
        dispatchEvent({type: fetch, payload: res.data.response.cities})
    }}
}
/* export default */