<template>
  <div class="wrapper">
    <izHeader
      :top-lincs="topPanel"
      :main-menu="mainMenu"
    />
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
  components: {
    izHeader,
    izTags,
    izAside,
    izPlayer,
    izFooter
  },
  async asyncData ({ store }) {
    const tagsData = await store.dispatch('tags/getTagsApi', 'rossiia')
    await store.dispatch('rates/getTagsApi')

    return {
      topPanel: tagsData.topPanel,
      mainMenu: tagsData.mainMenu
    }
  },
  data () {
    return {
    }
  }
  // mounted () {
  //   // this.SET_IP()
  //   this.$store.dispatch('getIP')
  // },
}
</script>

<style>
</style>
