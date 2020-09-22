<template>
  <div class="wrapper">
    <!-- {{ err }} -->
    <izHeader />
    <div class="content-wrapper">
      <div class="container">
        <div class="page-wrapper">
          <section class="section">
            <izPublications
              :param-page="paramPage"
            />
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
import izPublications from '@/components/tags/Publications'
import izAside from '@/components/Aside'
import izFooter from '@/components/footer/Footer'

const paramPage = {
  limit: 20
}
export default {
  // validate ({ params, store, route }) {
  //   return true
  // },
  components: {
    izHeader,
    izPublications,
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
        materials: {
          limit: paramPage.limit,
          offset: page * paramPage.limit
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
      paramPage
    }
  }
}
</script>

<style>
</style>
