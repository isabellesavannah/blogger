import { AppState } from '../AppState'
import { blogApi } from '../services/AxiosService'
class BlogService {
  async getBlogs() {
    try {
      const res = await blogApi.get('')
      AppState.blogs = res.data
      // console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  async getBlog() {
    try {
      const res = await blogApi.get('')
      AppState.newBlog = res.data
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  async createBlog(rawBlog) {
    try {
      const res = await blogApi.post('', rawBlog)
      AppState.newBlog.push(res.data)
      console.log(res.data)
      return res.data._id
    } catch (error) {
      console.error(error)
    }
  }
}
export const blogService = new BlogService()
