<template>
  <div class="rates">
    <div class="rates__box">
      <div class="rates-icon">
        <div class="rates-icon__box">
          <div class="rates-icon__val">
            $
          </div>
        </div>
      </div>
      <svg class="rates-arrow">
        <use
          width="6"
          height="12"
          xlink:href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_down_red"
          href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_down_red"
        />
      </svg>
      <div class="rates-value">
        00.00s
      </div>
    </div>
    <div class="rates__box">
      <div class="rates-icon">
        <div class="rates-icon__box">
          <div class="rates-icon__val">
            €
          </div>
        </div>
      </div>
      <svg class="rates-arrow">
        <use
          width="6"
          height="12"
          xlink:href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_up_green"
          href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_up_green"
        />
      </svg>
      <div class="rates-value">
        00.00
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // async asyncData ({ $axios }) {
  //   let json
  //   try {
  //     json = await $axios.$get('https://iz.ru/api/course/all.json')
  //   } catch (e) {
  //     json = []
  //   }
  //   // console.log(json)
  //   return {
  //     courseJson: json
  //   }
  // },
  // async data () {
  //   const { courses } = await this.$axios.$get('https://iz.ru/api/course/all.json')
  //   console.log(courses)
  //   return {
  //     courseJson: []
  //   }
  // }
  data ({ params }) {
    this.$axios.get('https://iz.ru/api/course/all.json').then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    return { title: 'title' }
  }
  // created () {
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
