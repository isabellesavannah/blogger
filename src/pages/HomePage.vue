<template>
  <div>
    <div class="row">
      <div class="col-8">
        <form class="form-inline" @submit.prevent="createBlog">
          <div class="form-group">
            <input
              type="text"
              name="title"
              id="title"
              v-model="state.newBlog.title"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="body"
              id="body"
              v-model="state.newBlog.body"
            />
          </div>
          <button class="btn btn-info" type="submit">
            Post
          </button>
        </form>
      </div>
      <Blogs v-for="blogStuff in state.blogs" :key="blogStuff.body" :blogs="blogStuff" />
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { blogService } from '../services/BlogService'
import { useRouter } from 'vue-router'
import Blogs from '../components/blogs'
export default {
  name: 'Home',
  props: {
    newBlog: { type: Object, required: true }
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      blogs: computed(() => AppState.blogs),
      newBlog: {}
    })
    onMounted(() => {
      blogService.getBlogs()
    })
    return {
      state,
      async createBlog() {
        const titleId = await blogService.createBlog(state.newBlog)
        router.push({ name: 'NewBlog', params: { blogId: titleId } })
        state.newBlog = {}
      }
    }
  },
  components: {
    Blogs
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
