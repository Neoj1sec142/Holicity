import Axios from 'axios'

// export const BASE_URL = 'http://localhost:3001' 
export const BASE_URL = 'https://holicity-backend.herokuapp.com' 
const Client = Axios.create({ baseURL: BASE_URL }, {mode: 'CORS'})


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
