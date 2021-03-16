<template>
  <div class="newBlogPage">
    <!-- <NewBlogs v-for="newStuff in state.newBlog" :key="newStuff.body" :new-blog="newStuff" />
    {{ state.newBlog }} -->
  </div>
</template>

<script>
// import { reactive } from '@vue/reactivity'
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { blogService } from '../services/BlogService'
import { useRoute } from 'vue-router'

export default {
  name: 'NewBlog',
  setup() {
    const route = useRoute()
    const state = reactive({
      newBlog: computed(() => AppState.newBlog)
    })
    onMounted(() => {
      blogService.getBlog(route.params.blogId)
    })
    return {
      state

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
