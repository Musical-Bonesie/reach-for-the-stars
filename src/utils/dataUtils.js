import axios from "axios";
import { API_KEY } from "./api_key";

require("dotenv").config();
const URL = `https://api.nasa.gov/planetary/apod?api_key=`;
// export const API_KEY = process.env.REACT_APP_API_KEY;
const URL_MARS = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&earth_date=2021-8-3&api_key=`;

//GET all NASA APOD Images
export const getAllImages = () => axios.get(`${URL}${API_KEY}`);
//GET MARS ROVER IMAGES for AUG 2021
export const getMarsPhotos = () => axios.get(`${URL_MARS}${API_KEY}`);
