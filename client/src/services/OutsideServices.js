import axios from 'axios'
// const API_KEY = process.env.API_KEY

export const GetNews = async () => {
    try{
        const res = await axios.get(`https://api.thenewsapi.com/v1/news/all?api_token=UkGitUY5wqB77xeE3mS6PdZvCFo0QsQRo0jWmcbF`)
        console.log(res, "SERVICES")
        return res.data
    }catch(err){throw err}
}