import axios from "axios";
import { API_KEY } from "./api_key";

require("dotenv").config();
const URL = `https://api.nasa.gov/planetary/apod?api_key=`;
// export const API_KEY = process.env.REACT_APP_API_KEY;

//GET all NASA APOD Images
export const getAllImages = () => axios.get(`${URL}${API_KEY}`);
