import axios from "axios";

const API = axios.create({
  
  baseURL: "https://portfolio-evaluator-7byc.onrender.com/api",

});

export const getProfile = (username) =>
  API.get(`/profile/${username}`);