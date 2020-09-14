<template>
  <div class="logos">
    <div class="logos-container">
      <div v-for="item in logos" :key="item.title" class="logos-item">
        <a
          :href="item.url"
          :class="'logos-item__url ' + item.addClass"
        >
          <svg
            v-if="item.iconType==='svg'"
            class="logos-item__logo"
          >
            <use
              :width="(item.width ? item.width : 33)"
              :height="(item.height ? item.height: 33)"
              :xlink:href="item.icon"
              :href="item.icon"
            />
          </svg>
          <img v-if="item.iconType==='img'" :src="item.icon" :alt="item.title" class="logos-item__logo">
          <div class="logos-item__text">
            {{ item.text }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logos: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>
</style>
