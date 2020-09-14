<template>
  <div class="search">
    <div id="searchClose" class="search-close">
      <div class="burger">
        <div class="burger-on__box">
          <div class="burger-on__item" />
        </div>
      </div>
    </div>
    <div id="searchShowForm" class="search__box">
      <svg class="search-icon">
        <use
          width="26"
          height="26"
          xlink:href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_header_search"
          href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_header_search"
        />
      </svg>
    </div>
    <div class="search-form">
      <div class="search-form__box">
        <form id="resume-form" action="/search" method="get" accept-charset="UTF-8">
          <div class="search-form__content">
            <div class="search-form__input">
              <div class="search-form__input__box">
                <input
                  id="edit-text"
                  class="form-text"
                  autocomplete="off"
                  type="text"
                  name="text"
                  value
                  size="60"
                  maxlength="128"
                >
              </div>
            </div>
            <div id="searchGo" class="search-form__input-icon">
              <div class="search-icon__box">
                <svg class="search-icon">
                  <use
                    stroke="#4f336c"
                    fill="#4f336c"
                    width="30"
                    height="34"
                    xlink:href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_header_search2"
                    href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_header_search"
                  />
                </svg>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
