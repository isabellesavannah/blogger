import Axios from 'axios'

export const baseURL = window.location.origin.includes('localhost') ? 'http://localhost:3000' : ''
export const blogApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/blogs',
  timeout: 8000
})
export const api = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/',
  timeout: 8000
})

export const setBearer = function(bearer) {
  blogApi.defaults.headers.authorization = bearer
  api.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  blogApi.defaults.headers.authorization = ''
  api.defaults.headers.authorization = ''
}
