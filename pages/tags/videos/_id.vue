<template>
  <div class="wrapper">
    <izHeader />
    <div class="content-wrapper">
      <div class="container">
        <div class="page-wrapper">
          <section class="section">
            <izVideos
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
import { mapMutations } from 'vuex'
import izHeader from '@/components/header/Header'
import izVideos from '@/components/tags/Videos'
import izAside from '@/components/Aside'
import izFooter from '@/components/footer/Footer'

const paramPage = {
  limit: 12
}

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
          limit: paramPage.limit,
          offset: page * paramPage.limit
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
      paramPage
    }
  },
  mounted () {
    this.setSection(this.$refs.mainSection)
  },
  methods: {
    ...mapMutations('slider', {
      setSection: 'SET_MAIN_SECTION'
    })
  }
}
</script>

<style>
</style>
