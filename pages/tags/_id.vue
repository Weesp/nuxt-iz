<template>
  <div class="wrapper">
    <!-- {{ err }} -->
    <izHeader />
    <div class="content-wrapper">
      <div class="container">
        <div class="page-wrapper">
          <section class="section">
            <izTags />
          </section>
          <izAside />
        </div>
      </div>
    </div>
    <izFooter />
  </div>
</template>

<script>
import izHeader from '@/components/header/Header'
import izTags from '@/components/tags/Tags'
import izAside from '@/components/Aside'
import izFooter from '@/components/footer/Footer'

export default {
  validate ({ params, store }) {
    return true
  },
  components: {
    izHeader,
    izTags,
    izAside,
    izFooter
  },
  asyncData ({ params, store, error }) {
    // await store.dispatch('tags/fetchTags', params.id).catch(function (err) {
    //   console.log(err)
    //   return { err }
    // })
    return Promise.all([
      store.dispatch('tags/fetchTags', params.id),
      store.dispatch('rates/getRates')
    ])
    // if (status) { error({ statusCode: status }) }
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
