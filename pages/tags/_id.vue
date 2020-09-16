<template>
  <div class="wrapper">
    <izHeader />
    <div class="content-wrapper">
      <div class="container">
        <div class="page-wrapper">
          <section class="section">
            <izPlayer />
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
import izPlayer from '@/components/Player'
import izFooter from '@/components/footer/Footer'

export default {
  validate ({ params, store }) {
    return true
  },
  components: {
    izHeader,
    izTags,
    izAside,
    izPlayer,
    izFooter
  },
  async asyncData ({ params, store, error }) {
    await store.dispatch('tags/fetchTags', params.id)
    // if (status) { error({ statusCode: status }) }
    await store.dispatch('rates/getRates')
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
