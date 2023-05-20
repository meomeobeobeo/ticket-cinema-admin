import axios from "axios";

const baseUrl = "http://localhost:1337";
const API = axios.create({baseURL: baseUrl})


export const createFilmInformation = ({formData}) =>{

    return API.post('/blue/films', formData) 

}

export const getFilmInformation = () =>{
    return API.get('/blue/films') 
}

