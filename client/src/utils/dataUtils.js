import axios from "axios";
require("dotenv").config();

const URL_MARS = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&earth_date=2021-8-3&api_key=`;
export const API_KEY = process.env.REACT_APP_API_KEY;
export const API_URL = process.env.REACT_APP_API_URL;

//GET NASA DAILY APOD IMAGE
export const getAllImages = () => axios.get(`${API_URL}${API_KEY}`);
//GET 25 IMAGES FROM MARS ROVER IMAGES FROM AUG 3 2021
export const getMarsPhotos = () => axios.get(`${URL_MARS}${API_KEY}`);
