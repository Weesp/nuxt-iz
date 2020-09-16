<template>
  <div v-if="rates && rates.usd && rates.eur" class="rates">
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
          v-if="rates.usd.current >= rates.usd.old"
          width="6"
          height="12"
          xlink:href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_up_green"
          href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_up_green"
        />
        <use
          v-else
          width="6"
          height="12"
          xlink:href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_down_red"
          href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_down_red"
        />
      </svg>
      <div class="rates-value">
        {{ Math.round(rates.usd.current * 100) / 100 }}
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
          v-if="rates.eur.current >= rates.eur.old"
          width="6"
          height="12"
          xlink:href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_up_green"
          href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_up_green"
        />
        <use
          v-else
          width="6"
          height="12"
          xlink:href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_down_red"
          href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_currency_arrow_down_red"
        />
      </svg>
      <div class="rates-value">
        {{ Math.round(rates.eur.current * 100) / 100 }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('rates', {
      rates: 'rates'
    })
  }
}
</script>

<style>
</style>
