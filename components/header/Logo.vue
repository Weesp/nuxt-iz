<template>
  <div class="logo-container">
    <a class="logo" href="/">
      <svg class="logo-img">
        <use width="152" height="32" xlink:href="/sprite/sprite-svg.svg#header--iz-logo-full" href="/sprite/sprite-svg.svg#header--iz-logo-full" />
      </svg>
    </a>
    <div class="mobile-logo">
      <input id="menuLogoSwitcher" class="menu-switcher" type="checkbox">
      <label class="logo-menu-open" for="menuLogoSwitcher">
        <div class="logo-container__mobile">
          <svg class="logo-img">
            <use width="152" height="32" xlink:href="/sprite/sprite-svg.svg#header--iz-logo-full" href="/sprite/sprite-svg.svg#header--iz-logo-full" />
          </svg>
          <img class="logo-menu__arrow" src="@/assets/img/icons/arrow-logo.svg">
        </div>
      </label>
      <div class="logo__menu">
        <li v-for="item in logoMenuItems" :key="item.title" :class="'logo__menu-item ' + item.addClass">
          <a :href="item.url">
            <img v-if="item.icon" class="menu-item__icon" :src="item.icon">
            <div v-else class="menu-item__icon" />
            <div class="menu-item__text">
              {{ item.title }}
            </div>
          </a>
        </li>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    logoMenuItems: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss">

</style>
