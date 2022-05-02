// import axios from "axios"

// export const API_URL = 'https://project-2-api.herokuapp.com'
// export const API_KEY = "f3958c42-1d3f-41f4-b887-c7c5b39c8c19"

// export const API_CALLS = {

//   getVideos: () => axios.get(`${API_URL}/videos?api_key=${API_KEY}`),
//   getDetailedVideos: (id) => axios.get(`${API_URL}/videos/${id}?api_key=${API_KEY}`),
// }

import axios from "axios"

export const API_URL = 'http://localhost:'
export const API_END_POINT = 'videos'

export const PORT = '8080/'

export const API_CALLS = {

    getVideos: () => axios.get(`${API_URL}${PORT}${API_END_POINT}`),
    getDetailedVideos: (id) => axios.get(`${API_URL}${PORT}${API_END_POINT}/${id}`),
    postComments: (id, comment) => axios.post(`${API_URL}${PORT}${API_END_POINT}/${id}/comments`, comment),
    deleteComments: (id, commentId) => axios.delete(`${API_URL}${PORT}${API_END_POINT}/${id}/comments/${commentId}`)
}