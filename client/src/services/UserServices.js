import Client from './api'

export const GetUsers = async () => {
    // console.log("Before Try")
    try{
        const res = await Client.get('')
        // console.log("RES", res)
        return res.data
    }catch(err){
        throw err
    }
}

export const GetUserDetail = async (id) => {
    // console.log("Before Try")
    try{
        const res = await Client.get(`users/${id}`)
        // console.log("RES", res)
        return res.data
    }catch(err){
        throw err
    }
}