<template>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="blogs.imgUrl" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">
          {{ blogs.creator.name }}
        </p>
        <p class="card-text">
          {{ blogs.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { computed } from '@vue/runtime-core'
export default {
  name: 'Blogs',
  props: {
    blogs: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
      blogs: computed(() => AppState.blogs)
    })

    return {
      state
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>

</style>
