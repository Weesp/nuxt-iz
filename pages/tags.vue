<template>
  <div class="wrapper">
    {{ pageParams }}
    <!-- <izHeader
      :top-lincs="topPanel"
      :main-menu="mainMenu"
      :rates="rates"
    /> -->
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
// import izHeader from '@/components/header/Header'
import izTags from '@/components/tags/Tags'
import izAside from '@/components/Aside'
import izPlayer from '@/components/Player'
import izFooter from '@/components/footer/Footer'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    // izHeader,
    izTags,
    izAside,
    izPlayer,
    izFooter
  },
  // async asyncData ({ $axios }) {
  //   let ip, topPanel, mainMenu, ratesIp, rates
  //   try {
  //     ip = await $axios.$get('https://iz.ru/api/0/tag/rossiia')
  //   } catch (e) {
  //     ip = []
  //   }
  //   try {
  //     ratesIp = await $axios.$get('https://iz.ru/api/course/all.json')
  //   } catch (error) {
  //     rates = {}
  //   }
  //   // console.log(json)
  //   try {
  //     topPanel = ip.included.topPanel.objects
  //     mainMenu = ip.included.menu.objects
  //     rates = ratesIp
  //   } catch (e) {
  //     topPanel = []
  //     mainMenu = []
  //   }
  //   return {
  //     all: ip,
  //     topPanel,
  //     mainMenu,
  //     rates
  //   }
  // },
  data () {
    return {
    }
  },
  mounted () {
    // this.SET_IP()
    this.$store.dispatch('getIP')
  },
  computed: {
    ...mapGetters([
      'pageParams'
    ])
  },
  // mounted () {
  //   this.fetchSomething()
  // },
  methods: {
    ...mapActions([
      'getIP'
    ])
  }
}
</script>

<style>
</style>
