<template>
  <div class="wrapper">
    <izHeader
      :top-lincs="topPanel"
      :main-menu="mainMenu"
    />
    <div class="content-wrapper">
      <div class="tags-content__box">
        <pre>{{ all }}</pre>
      </div>
    </div>
  </div>
  <!-- <div class="tag-title">
      <div class="tag-title__box">
        <img
          class="tag-title-image"
          src="../assets/img/tags/header-title-img.webp"
          alt="Все новости с тегом &quot;Александр Лукашенко&quot;"
        />
        <div class="tag-title__background">
          <div class="background-mask">
            <img
              class="background-img"
              src="../assets/img/tags/header-background.webp"
              alt="Все новости с тегом &quot;Александр Лукашенко&quot;"
            />
          </div>
        </div>
        <div class="tag-title-content">
          <div class="tag-title-content__box">
            <div class="tag-title-content__label">Все новости с тегом</div>
            <div class="tag-title-content__title">Александр Лукашенко</div>
            <div
              class="tag-title-content__text"
            >Алекса́ндр Григо́рьевич Лукаше́нко — белорусский политический и государственный деятель. Действующий президент Республики Беларусь с 20 июля 1994 года, президент Национального олимпийского комитета Республики Беларусь.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tag-tabs">
      <div class="tag-tabs__box" id="tabsEvent"></div>
    </div>
    <div class="tabs-content">
      <div class="tag-materials">
        <div class="tag-materials__box"></div>
      </div>
      <div class="tag-populations tag-materials">
        <div class="population-header">
          <div class="population-header__box">
            <img
              class="population-header__icon"
              src="../assets/img/tags/icon-longread.svg"
              alt="Популярные материалы"
            />
            <div class="population-header__title">Популярные материалы</div>
            <div class="tag-section__line"></div>
          </div>
        </div>
        <div class="population-materials__box"></div>
      </div>
      <div class="tag-materials">
        <div class="tag-materials__box"></div>
      </div>
      <div class="tag-query tag-materials">
        <div class="tag-query-header">
          <div class="tag-query-header__box">
            <div class="tag-query-header__title">Популярные запросы с этим тэгом</div>
            <div class="tag-section__line"></div>
          </div>
        </div>
        <div class="tag-query__box"></div>
      </div>
      <div class="tag-materials">
        <div class="tag-materials__box"></div>
      </div>
      <div class="tag-videos tag-materials" id="videos">
        <div class="tag-video-header">
          <div class="tag-video-header__box">
            <div class="tag-video-header__icon__box">
              <svg class="tag-video-header__icon">
                <use
                  width="20"
                  height="20"
                  xlink:href="../assets/img/sprite/sprite-svg.svg?v=1.3#index--SVG_icons_type_materials--icon_video"
                  href="../assets/img/sprite/sprite-svg.svg?v=1.3#index--SVG_icons_type_materials--icon_video"
                />
              </svg>
            </div>
            <div class="tag-video-header__title">Видео</div>
            <div class="tag-section__line"></div>
          </div>
        </div>
        <div class="tag-video__box"></div>
      </div>
      <div class="tag-materials">
        <div class="tag-materials__box"></div>
      </div>
    </div>
  </div>-->
</template>

<script>
import izHeader from '@/components/Header'

export default {
  components: {
    izHeader
  },
  async asyncData ({ $axios }) {
    let ip, topPanel, mainMenu
    // , json
    try {
      ip = await $axios.$get('https://iz.ru/api/0/tag/rossiia')
      // json = await $axios.$get('https://iz.ru/api/course/all.json')
    } catch (e) {
      ip = []
      topPanel = []
      mainMenu = []
    }
    // console.log(json)
    try {
      topPanel = ip.included.topPanel.objects
      mainMenu = ip.included.menu.objects
    } catch (e) {
      topPanel = []
      mainMenu = []
    }
    return {
      all: ip,
      topPanel,
      mainMenu
    }
  },
  data () {
    return {
    }
  }
  // mounted () {
  //   this.fetchSomething()
  // },
  // methods: {
  //   async fetchSomething () {
  //     const json = await this.$axios.$get('https://iz.ru/api/course/all.json')
  //     console.log(json)
  //   }
  // }
}
</script>

<style>
</style>
