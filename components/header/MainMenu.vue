<template>
  <div class="menu">
    <nav class="menu__box">
      <label class="menu-open" for="menuSwitcher">
        <div class="burger">
          <div class="burger__box">
            <div class="burger__item" />
          </div>
        </div>
      </label>
      <div class="menu-items__box">
        <div class="menu-mini__label mobile-item__title">
          Материалы
        </div>
        <ul
          class="menu-items"
          itemscope
          itemtype="http://schema.org/SiteNavigationElement"
        >
          <div
            v-for="item in menuItems"
            :key="item.title"
            :class="'menu-item__box' + (item && item.children ? ' rubrics-items' : '')"
            itemscope
            itemtype="http://schema.org/ItemList"
            :itemprop="item.title"
          >
            <li
              v-if="item && item.children"
              class="menu-item"
              itemprop="itemListElement"
              itemscope
              itemtype="http://schema.org/ItemList"
            >
              <div class="rubrics-items__box">
                <svg class="rubrics-items__img">
                  <use width="13" height="13" xlink:href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_header_menu_down" href="/sprite/sprite-svg.svg?v=1.3#SVG--icon_header_menu_down" />
                </svg>
                <span v-if="item.title" itemprop="name" class="rubrics-items__text mobile-item__title">{{ item.title }}</span>
              </div>
              <ul class="rubrics">
                <li
                  v-for="rubric in item.children"
                  :key="rubric.title"
                  class="rubric-item"
                  itemprop="itemListElement"
                >
                  <a v-if="rubric.path" :href="rubric.path" itemprop="url">
                    <svg v-if="rubric.icon" class="rubric-item__icon">
                      <use
                        :width="(rubric.width ? rubric.width : 20)"
                        :height="(rubric.height ? rubric.height: 20)"
                        :xlink:href="rubric.icon"
                        :href="rubric.icon"
                      />
                    </svg>
                    <div v-else class="rubric-item__icon" />
                    <div v-if="rubric.title" itemprop="name" class="rubric-item__text mobile-item__label">
                      {{ rubric.title }}
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li v-else class="menu-item" itemprop="itemListElement">
              <a v-if="item && item.path && item.title" :href="item.path" itemprop="url" class="mobile-item__label">
                <meta itemprop="name" :content="item.title">
                {{ item.title }}
              </a>
            </li>
          </div>
        </ul>
        <div class="mobile-footer">
          <div class="mobile-newspaper">
            <div class="mobile-newspaper__items__box">
              <a class="mobile-newspaper__item" href="/">
                <img class="mobile-newspaper__item-icon" src="@/assets/img/icons/newspaper.svg">
                <div class="mobile-newspaper__item-label mobile-item__label">Газета</div>
              </a>
              <a class="mobile-newspaper__item" href="/">
                <img class="mobile-newspaper__item-icon" src="@/assets/img/icons/newspaper-plus.svg">
                <div class="mobile-newspaper__item-label mobile-item__label">Приложения</div>
              </a>
              <a class="mobile-newspaper__item" href="/">
                <div class="mobile-newspaper__item-icon" />
                <div class="mobile-newspaper__item-label mobile-item__label">подписка</div>
              </a>
            </div>
          </div>
          <div class="mobile-main-news">
            <div class="mobile-main-news__header mobile-item__title">
              Главное
            </div>
            <div class="mobile-main-news__items__box">
              <a class="mobile-main-news__item" href="/">
                <div class="mobile-main-news__item-label mobile-item__label">Протесты в Белоруссии</div>
              </a>
              <a class="mobile-main-news__item" href="/">
                <div class="mobile-main-news__item-label mobile-item__label">Распространение коронавируса SARS-CoV-2</div>
              </a>
              <a class="mobile-main-news__item" href="/">
                <div class="mobile-main-news__item-label mobile-item__label">ДТП с участием Михаила Ефремова</div>
              </a>
            </div>
          </div>
          <div class="mobile-footer-menu">
            <div class="mobile-footer-menu__box">
              <a v-for="item in mobiFooterMenu" :key="item.title" :href="item.url" class="mobile-footer-menu__item">
                <div class="mobile-footer-menu__item-text">
                  {{ item.title }}
                </div>
              </a>
            </div>
            <div class="mobile-footer-social__box">
              <div v-for="item in socialMenu" :key="item.title" class="mobile-footer__social-item">
                <a :href="item.url" class="social-item__url">
                  <svg
                    class="social-item__icon"
                    :style="'width:' + (item.width ? item.width: 30) + 'px; height:' + (item.height ? item.height : 30) + 'px'"
                  >
                    <use
                      :width="(item.width ? item.width : 30)"
                      :height="(item.height ? item.height: 30)"
                      :xlink:href="item.icon"
                      :href="item.icon"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="footer-mobile-menu-bottom-wrapper">
            <div class="text-block-mobile">
              <p>
                Сайт функционирует
                <nobr>при финансовой</nobr> поддержке Федерального агентства
                <nobr>по печати</nobr>
                <nobr>и массовым</nobr> коммуникациям.
              </p>
              <p>
                Зарегистрировано Федеральной службой
                <nobr>по надзору</nobr>
                <nobr>в сфере</nobr> связи, информационных технологий
                <nobr>и массовых</nobr>
                коммуникаций.
                Свидетельства о регистрации
                <a href="http://rkn.gov.ru/mass-communications/reestr/media/?id=630443" target="_blank">ЭЛ № ФС 77 - 76208 от 8 июля 2019 года</a>, <a href="http://rkn.gov.ru/mass-communications/reestr/media/?id=630951" target="_blank">
                  ЭЛ № ФС 77 - 72003 от 26 декабря 2019 года
                </a>
              </p>
              <p>
                Все права защищены <nobr>© ООО «МИЦ «Известия», 2020</nobr>
              </p>
            </div>
          </div>
        </div>
      </div>
      <label class="menu-close" for="menuSwitcher">
        <div class="burger">
          <div class="burger-on__box">
            <div class="burger-on__item" />
          </div>
        </div>
      </label>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    mobiFooterMenu: {
      type: Array,
      default () {
        return []
      }
    },
    socialMenu: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    ...mapState('tags', {
      menuItems: 'mainMenu'
    })
    // menuItemUp () {
    //   let res
    //   const defaultMenu = menuDefault.filter(elem => Object.prototype.hasOwnProperty.call(elem, 'children'))
    //   const items = this.menuItems.filter(elem => Object.prototype.hasOwnProperty.call(elem, 'children'))
    //   // for (const index in items) {
    //   //   const element = items[index]
    //   //   if (Object.prototype.hasOwnProperty.call(element, 'children')) {
    //   //     for (const key in element) {
    //   //       const child = element[key]
    //   //       console.log(child)
    //   //       items[index][key]
    //   //     }
    //   //   }
    //   // }
    //   return res
    // }
  }
}
</script>

<style>
</style>
