import axios from "axios";
import { API_URL } from "../constants/constant";



export const getRecipes = async(searchedQuery)=>{
    try {
       let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`)
       return response.data
    } catch (error) {
        console.log(error.message);
        return error.response
    }
}

export const getRecipe = async(recipeId)=>{
    try {
       let response = await axios.get(`${API_URL}/get?rId=${recipeId}`)
       return response.data
    } catch (error) {
        console.log(error.message);
        return error.response
    }
}