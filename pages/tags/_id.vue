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
  // validate ({ params, store, route }) {
  //   return true
  // },
  components: {
    izHeader,
    izTags,
    izAside,
    izFooter
  },
  asyncData ({ params, store, error, query }) {
    // await store.dispatch('tags/fetchTags', params.id).catch(function (err) {
    //   console.log(err)
    //   return { err }
    // })
    let page = 0
    if (query && query.page && Number.isInteger(+query.page)) {
      page = query.page
    }
    const param = JSON.stringify({
      include: {
        materials: {
          limit: 8,
          offset: page * 8
        },
        videos: {
          limit: 4,
          offset: page * 4
        },
        photos: {
          limit: 4,
          offset: page * 4
        },
        topPanel: true,
        menu: true,
        ticker: true,
        config: false
      }
    })
    console.log(param)
    return Promise.all([
      store.dispatch('tags/fetchTags', params.id + '?json=' + param),
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
