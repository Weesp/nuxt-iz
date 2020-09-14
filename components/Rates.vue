<template>
  <div class="rates">
    <pre>{{ ratesCourse }}</pre>
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
  props: {
    ratesCourse: {
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
