<template>
  <div>
    <div class="fix-black-bg" />
    <div class="search">
      <div class="fix-black-bg" />
      <div class="search-close" @click="closeSearch">
        <div class="burger">
          <div class="burger-on__box">
            <div class="burger-on__item" />
          </div>
        </div>
      </div>
      <div id="searchShowForm" class="search__box" @click="showSearch">
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
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  mounted () {
  },
  destroyed () {
  },
  methods: {
    showSearch (event) {
      const mainBox = event.currentTarget.parentNode
      const classNames = mainBox.className.split(' ')
      const wrapper = document.querySelector('.fix-black-bg')
      if (~classNames.indexOf('active')) {
        mainBox.classList.remove('active')
        wrapper.classList.remove('active')
        document.removeEventListener('click', this.closeSearchHandler)
      } else {
        mainBox.classList.add('active')
        wrapper.classList.add('active')
        document.addEventListener('click', this.closeSearchHandler)
      }
    },
    closeSearch (event) {
      const element = document.body.querySelector('.search')
      const wrapper = document.querySelector('.fix-black-bg')
      element.classList.remove('active')
      wrapper.classList.remove('active')
      document.removeEventListener('click', this.closeSearchHandler)
    },
    closeSearchHandler (event) {
      if (!event.target.closest('.search')) {
        const element = document.body.querySelector('.search')
        const wrapper = document.querySelector('.fix-black-bg')
        element.classList.remove('active')
        wrapper.classList.remove('active')
        document.removeEventListener('click', this.closeSearchHandler)
      }
    }
  }
}
</script>

<style>
</style>
