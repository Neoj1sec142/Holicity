import axios from 'axios'

export const BASE_URL = 'http://localhost:8000' 
//export const BASE_URL = 'https://holicity.herokuapp.com' 
const Client = axios.create({ baseURL: BASE_URL })
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
})


Client.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`
        }
        return config 
    },
    (error) => Promise.reject(error)
)

export default Client
