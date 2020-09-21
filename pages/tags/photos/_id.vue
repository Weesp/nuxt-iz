<template>
  <div class="wrapper">
    <izHeader />
    <div class="content-wrapper">
      <div class="container">
        <div class="page-wrapper">
          <section class="section">
            <izPhotos />
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
import izPhotos from '@/components/tags/Photos'
import izAside from '@/components/Aside'
import izFooter from '@/components/footer/Footer'

export default {
  // validate ({ params, store, route }) {
  //   return true
  // },
  components: {
    izHeader,
    izPhotos,
    izAside,
    izFooter
  },
  asyncData ({ route, params, store, error, query }) {
    // await store.dispatch('tags/fetchTags', params.id).catch(function (err) {
    //   console.log(err)
    //   return { err }
    // })
    // console.log(route)
    let page = 0
    if (query && query.page && Number.isInteger(+query.page)) {
      page = query.page
    }
    const param = JSON.stringify({
      include: {
        photos: {
          limit: 24,
          offset: page * 24
        },
        topPanel: true,
        menu: true,
        ticker: true,
        config: false
      }
    })
    // console.log(param)
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
