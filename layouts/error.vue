<template>
  <div class="nuxt-error">
    <pre> {{ error }} </pre>
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
import error404 from '~/components/error/404.vue'
import error500 from '~/components/error/500.vue'
export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'nuxt-error',
  layout: 'default', // optional
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    errorPage () {
      if (this.error.statusCode === 404) {
        return error404
      }
      // catch everything else
      return error500
    }
  }
}
</script>
