import Client from './api'

export const GetPosts = async () => {
    // console.log("Before Try")
    try{
        const res = await Client.get('posts/')
        // console.log("RES", res)
        return res.data
    }catch(err){
        throw err
    }
}