<template>
  <div class="wrapper">
    <izHeader
      :top-lincs="topPanel"
      :main-menu="mainMenu"
      :rates="rates"
    />
    <div class="content-wrapper">
      <!-- <izTags /> -->
    </div>
  </div>
</template>

<script>
import izHeader from '@/components/header/Header'

// import izTags from '@/components/tags/Tags'

export default {
  components: {
    izHeader
    // izTags
  },
  async asyncData ({ $axios }) {
    let ip, topPanel, mainMenu, ratesIp, rates
    try {
      ip = await $axios.$get('https://iz.ru/api/0/tag/rossiia')
    } catch (e) {
      ip = []
    }
    try {
      ratesIp = await $axios.$get('https://iz.ru/api/course/all.json')
    } catch (error) {
      rates = {}
    }
    // console.log(json)
    try {
      topPanel = ip.included.topPanel.objects
      mainMenu = ip.included.menu.objects
      rates = ratesIp
    } catch (e) {
      topPanel = []
      mainMenu = []
    }
    return {
      all: ip,
      topPanel,
      mainMenu,
      rates
    }
  },
  data () {
    return {
    }
  }
  // mounted () {
  //   this.fetchSomething()
  // },
  // methods: {
  //   async fetchSomething () {
  //     const json = await this.$axios.$get('https://iz.ru/api/course/all.json')
  //     console.log(json)
  //   }
  // }
}
</script>

<style>
</style>
