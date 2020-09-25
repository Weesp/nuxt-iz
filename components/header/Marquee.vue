<template>
  <div class="marquee__box">
    <div ref="marquee" class="marquee">
      <div class="marquee__inner">
        <div
          v-for="item in marqueeItem"
          :key="item.id"
          class="marquee-item__box"
        >
          <a v-if="item && item.path" :href="item.path" class="marquee-item">
            <div
              v-if="item.rubric && item.rubric.title"
              class="marquee-item__category"
            >
              {{ item.rubric.title }}
            </div>
            <div class="marquee-item__label__box">
              <div class="marquee-item__label__news">
                <span v-if="item.title">
                  {{ item.title }}
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="marquee__inner">
        <div
          v-for="item in marqueeItem"
          :key="item.id"
          class="marquee-item__box"
        >
          <a v-if="item && item.path" :href="item.path" class="marquee-item">
            <div
              v-if="item.rubric && item.rubric.title"
              class="marquee-item__category"
            >
              {{ item.rubric.title }}
            </div>
            <div class="marquee-item__label__box">
              <div class="marquee-item__label__news">
                <span v-if="item.title">
                  {{ item.title }}
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import positionScroll from '@/mixins/scroll'
import { removeFixedElementOnTop, fixedElementOnTop, offset } from '@/plugins/CustomFunction'

export default {
  mixins: [positionScroll],
  data: () => ({
    defaultTop: 0,
    lastScrollTop: 0,
    pdFix: 0
  }),
  computed: {
    ...mapState('tags', {
      marqueeItem: 'ticker'
    })
  },
  mounted () {
    setTimeout(() => {
      this.pdFix = document.querySelector('.header-iz').offsetHeight
      this.defaultTop = offset(this.$refs.marquee).top - this.pdFix
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
    }, 1000)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize (evt) {
      this.pdFix = document.querySelector('.header-iz').offsetHeight
      this.defaultTop = offset(this.$refs.marquee).top - this.pdFix
    },
    handleScroll (evt) {
      const target = this.$refs.marquee
      const scrollTop = this.positionScroll.y
      if (this.lastScrollTop > scrollTop) {
        // UP
        if (scrollTop <= this.defaultTop) {
          removeFixedElementOnTop(target, this.pdFix)
        }
      } else if (scrollTop >= this.defaultTop) {
        // DOWN
        fixedElementOnTop(target, this.pdFix)
      }
      this.lastScrollTop = scrollTop
    }
  }
}
</script>

<style>
</style>
