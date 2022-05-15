import Client from './api'

export const GetBlogs = async () => {
    try{
        const res = await Client.get('/blogs/')
        return res.data
    }catch(err){throw err}
}

export const GetBlogDetail = async (id) => {
    try {
        const res = await Client.get(`/blogs/${id}`)
        return res.data
    } catch (error) {throw error}
}
  
export const GetBlogByUser = async (id) => {
    try {
        const res = await Client.get(`/blogs/user/${id}`)
        return res.data
    } catch (err) {throw err}
}

export const GetBlogByType = async (type) => {
    try {
        const res = await Client.get(`/blogs/${type}`)
        return res.data
    } catch (err) {throw err}
}

export const CreateBlog = async (user_id, blog) => {
    try{
        const data = {
            type: blog.type,
            thoughts: blog.thoughts,
            url: blog.url,
            userId: user_id
        }
        await Client.post(`/blogs/create/${user_id}/`, data, {mode: "CORS"})
        .then((res) => console.log(res, "Blogged Successfully"))
        .catch((err) => console.log(err, "621"))
    }catch(err){throw err}
}

export const RemoveBlog = async (blog_id) => {
    try{
        await Client.delete(`blogs/delete/${blog_id}`)
        .then((res) => console.log(res, "Successfully removed blog"))
        .catch((error) => console.log(error))
    } catch (err) {
        throw err
    }
}