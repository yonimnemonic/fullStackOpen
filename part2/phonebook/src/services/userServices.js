import axios from "axios";

const baseURL = '/api/persons';


export const getUser = () => {
    return axios.get(baseURL)
}

export const addUser = (newObject) => {
    return axios.post(baseURL, newObject)
}

export const updateUser = (id, newObject) => {
    return axios.put(`${baseURL}/${id}`, newObject)
}

export const deleteUser = (id) => {
    return axios.delete(`${baseURL}/${id}`)
}
