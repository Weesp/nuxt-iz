<template>
  <div class="marquee__box">
    <div class="marquee">
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

export default {
  computed: {
    ...mapState('tags', {
      marqueeItem: 'ticker'
    })
  }
}
</script>

<style>
</style>
