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
        return res.data
    } catch (error) {throw error}
}
  
export const GetPostByUser = async (id) => {
    try {
        const res = await Client.get(`/posts/user/${id}`)
        return res.data
    } catch (err) {throw err}
}

export const GetPostByType = async (type) => {
    try {
        const res = await Client.get(`/posts/${type}`)
        return res.data
    } catch (err) {throw err}
}

export const CreatePost = async (id, post) => {
    try{
        const data = {
            title: post.title,
            type: post.type,
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

export const RemovePost = async (id) => {
    try{
        await Client.delete(`posts/delete/${id}`)
        .then((res) => console.log(res, "Successfully removed post"))
        .catch((error) => console.log(error))
    } catch (err) {
        throw err
    }
}

export const CreateComment = async (post_id, user_id, comment) => {
    try{
        const data = {
            title: comment.title,
            description: comment.description,
            rating: comment.rating,
            userId: user_id,
            postId: post_id
        }
        await Client.post(`/comments/create/post-${post_id}/user-${user_id}`, data, {mode: "CORS"})
        .then((res) => console.log(res, "Commented Successfully"))
        .catch((err) => console.log(err, "892"))
    }catch(err){throw err}
}