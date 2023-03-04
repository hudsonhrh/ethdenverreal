import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createTask = payload => api.post(`/taskData`, payload)
export const getTasks = () => api.get(`/taskData`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    createTask,
    getTasks,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis