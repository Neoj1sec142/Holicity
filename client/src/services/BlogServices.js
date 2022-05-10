import Client from './api'

export const GetBlogs = async () => {
    try{
        const res = await Client.get('/blogs')
        console.log(res, "SERVICES")
        return res.data
    }catch(err){throw err}
}

export const GetBlogDetail = async (id) => {
    try {
        const res = await Client.get(`/blogs/${id}`)
        // console.log(res, "RES")
        return res.data
    } catch (error) {throw error}
}
  
export const GetBlogByUser = async (id) => {
    try {
        const res = await Client.get(`/blogs/user/${id}`)
        // console.log(res, "res")
        return res.data
    } catch (err) {throw err}
}

export const GetBlogByType = async (type) => {
    try {
        const res = await Client.get(`/blogs/${type}`)
        console.log(res, "res")
        return res.data
    } catch (err) {throw err}
}

export const CreateBlog = async (id, blog) => {
    try{
        const data = {
            type: blog.type,
            thoughts: blog.thoughts,
            url: blog.url,
            userId: id
        }
        await Client.post(`/blogs/create/${id}`, data, {mode: "CORS"})
        .then((res) => console.log(res, "Bloged Successfully"))
        .catch((err) => console.log(err, "621"))
    }catch(err){throw err}
}

export const RemoveBlog = async (id) => {
    try{
        await Client.delete(`blogs/delete/${id}`)
        .then((res) => console.log(res, "Successfully removed blog"))
        .catch((error) => console.log(error))
    } catch (err) {
        throw err
    }
}