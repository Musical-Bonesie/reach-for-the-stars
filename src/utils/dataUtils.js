import axios from "axios";
export const URL = process.env.REACT_APP_API_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;

//GET all NASA APOD Images
export const getAllImages = () => axios.get(`${URL}${API_KEY}`);
