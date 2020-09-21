<template>
  <div class="wrapper">
    <izHeader />
    <div class="content-wrapper">
      <div class="container">
        <div class="page-wrapper">
          <section class="section">
            <izVideos />
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
import izVideos from '@/components/tags/Videos'
import izAside from '@/components/Aside'
import izFooter from '@/components/footer/Footer'

export default {
  components: {
    izHeader,
    izVideos,
    izAside,
    izFooter
  },
  asyncData ({ route, params, store, error, query }) {
    let page = 0
    if (query && query.page && Number.isInteger(+query.page)) {
      page = query.page
    }
    const param = JSON.stringify({
      include: {
        videos: {
          limit: 24,
          offset: page * 24
        },
        topPanel: true,
        menu: true,
        ticker: true,
        config: false
      }
    })
    return Promise.all([
      store.dispatch('tags/fetchTags', params.id + '?json=' + param),
      store.dispatch('rates/getRates')
    ])
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
