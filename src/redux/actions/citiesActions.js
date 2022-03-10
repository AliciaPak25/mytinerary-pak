import axios from "axios";

const citiesAction = {
    fetchCities: () => {
        return async(dispatch, getState)=>{ 
            const res = await axios.get('http://localhost:4000/api/cities')
            dispatch({type: 'fetch', payload: res.data.response.cities})
    }
    },

    fetchOneCity: (id)=>{
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/cities/'+id)
            console.log(res)
            dispatch({type: 'fetchOneCity', payload: res.data.response})
        }
    },

    findOneCity: (id)=>{
        return async (dispatch) => {
            dispatch({type: 'findOne', payload: id})
        }
    },
    
    deleteOneCity: (id) =>{
        return async(dispatch, getState) => {
            try{
                const res = await axios.delete('http://localhost:4000/api/cities/'+id)
                dispatch({type:'delete', payload: res.data.response})
            }catch(err){
                console.log(err)
            }
        }
    },
    filtering: (cities, value)=>{
        return (dispatch,getState)=>{
            
            dispatch({type:'filtrate', payload:{cities, value}})
        }
    },
    addCity: (name,country)=>{
        return async(dispatch,getState)=>{
            const res= await axios.post('http://localhost:4000/api/cities',{name,country})
            dispatch({type:'addCity', payload: res.data.response})

        }
    }
}
export default citiesAction;