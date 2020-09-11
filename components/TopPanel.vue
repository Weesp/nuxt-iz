<template>
  <div class="top-panel">
    <div class="top-panel__box">
      <div class="top-panel__column top-panel__linklist">
        <ul class="linklist">
          <pre>{{ topLincs }}</pre>
          <li v-for="link in topLincs" :key="link.id" class="linklist-item">
            <a :href="link.path" class="linklist-item__url">
              <div class="linklist-item__text">{{ link.title }}</div>
            </a>
          </li>
        </ul>
      </div>
      <div class="top-panel__column top-panel__rates">
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
                xlink:href="../assets/img/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_down_red"
              />
            </svg>
            <div class="rates-value">
              00.00
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
                xlink:href="../assets/img/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_up_green"
              />
            </svg>
            <div class="rates-value">
              00.00
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topLincs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
</style>
