import Client from './api'

export const GetUsers = async () => {
    try{
        const res = await Client.get('users/')
        return res.data
    }catch(err){throw err}
}

export const GetUserDetail = async (id) => {
    try{
        const res = await Client.get(`users/${id}`)
        return res.data
    }catch(err){throw err}
}

export const Follow = async (id, follower_id) => {
    try{
        const res = await Client.post(`followers/follow/${id}/follower/${follower_id}`)
        return res.data
    } catch (err) {throw err}
}

export const Unfollow = async (id, follower_id) => {
    try{
        const follower = await Client.delete(`followers/unfollow/${id}/follower/${follower_id}`)
        return follower.data
    } catch (err) {throw err}
}

export const AllUsersWFollowers = async () => {
    try {
        const res = await Client.get(`users/withfollowers`)
        return res.data
    } catch (err) {throw err}
}

export const UpdateProfile = async (id, userDetails) => {
    try {
        const res = await Client.put(`users/update/${id}`, userDetails)
        return res.data
      } catch (err) {throw err}
}

export const GetFollowerByUser = async (id) => {
    try {
        const res = await Client.get(`followers/followers/${id}`)
        return res.data
      } catch (err) {throw err}
}

export const GetFollowingByFollower = async (id) => {
    try {
        const res = await Client.get(`followers/following/${id}`)
        return res.data
      } catch (error) {throw error}
}

export const RemoveUser = async (id) => {
    try{
        await Client.delete(`users/${id}`)
        .then((res) => console.log(res, "Successfully removed user"))
        .catch((err) => console.log(err))
    } catch (err) {throw err}
}