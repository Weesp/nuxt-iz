<template>
  <div class="newspaper">
    <div class="newspaper__box">
      <svg class="newspaper__icon">
        <use
          width="50"
          height="35"
          xlink:href="/sprite/sprite-svg.svg?v=1.3#header--icon_gazeta2"
          href="/sprite/sprite-svg.svg?v=1.3#header--icon_gazeta2"
        />
      </svg>
      <svg class="newspape__arrow">
        <use
          width="14"
          height="14"
          xlink:href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_header_menu_down"
          href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_header_menu_down"
        />
      </svg>
      <div class="newspaper-menu">
        <div class="newspaper-menu__box">
          <li v-for="item in menuItems" :key="item.title" class="newspaper-item">
            <a :href="item.url">
              <img v-if="item.icon" :src="item.icon" :alt="item.title" class="newspaper-item__icon">
              <div v-else class="newspaper-item__icon" />
              <div class="newspaper-item__text">
                {{ item.title }}
              </div>
            </a>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: {
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
