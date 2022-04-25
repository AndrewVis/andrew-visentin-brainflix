import axios from "axios"

export const API_URL = 'https://project-2-api.herokuapp.com'
export const API_KEY = "f3958c42-1d3f-41f4-b887-c7c5b39c8c19"

export const API_CALLS = {

  getVideos: () => axios.get(`${API_URL}/videos?api_key=${API_KEY}`),
  getDetailedVideos: (id) => axios.get(`${API_URL}/videos/${id}?api_key=${API_KEY}`),
}