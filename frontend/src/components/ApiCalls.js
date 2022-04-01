import axios from 'axios';

export const  getAllCities = async () => {
    try {
        let data = await axios.get(`http://localhost:4000/api/cities`)
        return data
    }
    catch (error) {
        throw error
    }
}
export const addData = async (dataInput) => {
    console.log(dataInput)
    try {
        let data = await axios.post(`http://localhost:4000/api/cities`,{dataInput})
        return data
    }
    catch (error) {
        throw error
    }
}

export const  deleteCity = async (id) => {
    console.log(id)
    try {
        let data = await axios.delete(`http://localhost:4000/api/cities/${id}`)
        return data
    }
    catch (error) {
        throw error
    }
}
export const  modifyCity = async (id,dataInput) => {
    console.log(id, dataInput)
    try {
        let data = await axios.put(`http://localhost:4000/api/cities/${id}`, {dataInput})
        return data
    }
    catch (error) {
        throw error
    }
}
export const getASpecificCityByItsId = async (id) => {
    try {
        let data = await axios.get(`http://localhost:4000/api/cities/${id}`)
        return data
    }
    catch (error) {
        throw error
    }
}