import Client from './api'

export const GetPosts = async () => {
    try{
        const res = await Client.get('/posts/')
        return res.data
    }catch(err){throw err}
}

export const GetPostDetail = async (id) => {
    try {
        const res = await Client.get(`/posts/${id}`)
        console.log(res, "RES")
        return res.data
    } catch (error) {throw error}
}
  
export const GetPostByUser = async (id) => {
    try {
        const res = await Client.get(`posts/user/${id}`)
        return res.data
    } catch (err) {throw err}
}

export const CreatePost = async (id, post) => {
    try{
        const data = {
            title: post.title,
            image: post.image,
            description: post.description,
            url: post.url,
            userId: id
        }
        await Client.post(`/posts/create/${id}`, data, {mode: "CORS"})
        .then((res) => console.log(res, "Posted Successfully"))
        .catch((err) => console.log(err, "621"))
    }catch(err){throw err}
}