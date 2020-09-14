<template>
  <div class="container">
    <topPanel
      :top-lincs="topLincs"
    />
    <input id="menuSwitcher" class="menu-switcher" type="checkbox">
    <div class="header-iz__back" />
    <div class="header-iz">
      <logo
        :logo-menu-items="logoMenuItems"
      />
      <mainMenu
        :menu-items="menuItems"
        :rubric-items="rubricItems"
        :mobi-footer-menu="mobiFooterMenu"
        :social-menu="socialMenu"
      />
      <secondLogos
        :logos="secondLogoItems"
      />
      <newspaperMenu
        :menu-items="newspaperMenuItems"
      />
      <div class="fix-black-bg" />
      <search />
    </div>
  </div>
</template>

<script>
import topPanel from '@/components/TopPanel'
import logo from '@/components/Logo'
import mainMenu from '@/components/MainMenu'
import secondLogos from '@/components/SecondLogos'
import newspaperMenu from '@/components/NewspaperMenu'
import search from '@/components/Search'

import mobiFooterMenu from '@/assets/params/header/mobiFooterMenu'

import logoIz from '@/assets/img/icons/logo_iz.svg'
import logoNewspaper from '@/assets/img/icons/newspaper.svg'
import logoNewspaperPlus from '@/assets/img/icons/newspaper-plus.svg'
import logoRen from '@/assets/img/logos/ren.svg'
import logo5Tv from '@/assets/img/logos/5tv.svg'

import logoSE from '@/assets/img/logos/SE.png'
import logoMoreTv from '@/assets/img/logos/moreTv.svg'

export default {
  components: {
    topPanel,
    logo,
    mainMenu,
    secondLogos,
    newspaperMenu,
    search
  },
  directives: {
    scroll: {
      inserted (el, binding) {
        const f = function (evt) {
          // console.log(evt, binding)
          if (binding.value(evt, el)) {
            // console.log(evt, el)
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
      }
    }
  },
  props: {
    topLincs: {
      type: Array,
      default: () => []
    },
    mainMenu: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      logoMenuItems: [
        {
          url: '/',
          title: 'Новости iz.ru',
          icon: logoIz,
          addClass: 'iz-color'
        }, {
          url: '/',
          title: 'Газета Известия',
          icon: logoNewspaper,
          addClass: 'newspaper-color'
        }, {
          url: '/',
          title: 'Новости РЕН ТВ',
          icon: logoRen,
          addClass: 'rentv'
        }, {
          url: '/',
          title: 'Новости 5 канала',
          icon: logo5Tv,
          addClass: 'fivetv'
        }
      ],
      menuItems: [
        {
          url: '/news',
          title: 'Новости'
        }, {
          url: '/article',
          title: 'Статьи'
        }, {
          url: '/blog',
          title: 'Мнения'
        }, {
          url: '/photo',
          title: 'Фото'
        }, {
          url: '/video',
          title: 'Видео'
        }, {
          url: '/chart',
          title: 'Инфографика'
        }
      ],
      rubricItems: [
        {
          url: '/',
          title: 'Политика',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--01-politika'
        }, {
          url: '/',
          title: 'Общество',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--04-obshestvo'
        }, {
          url: '/',
          title: 'Стиль',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--0x-lux'
        }, {
          url: '/',
          title: 'Интернет',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--08-gadgets'
        }, {
          url: '/',
          title: 'Экономика',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--07-ekonimika'
        }, {
          url: '/',
          title: 'Происшествия',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--0x-fire'
        }, {
          url: '/',
          title: 'Авто',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--0x-car'
        }, {
          url: '/',
          title: 'Туризм',
          icon: '/sprite/sprite-svg.svg?v=1.3#0x-turizm'
        }, {
          url: '/',
          title: 'Мир',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--09-mir'
        }, {
          url: '/',
          title: 'Армия',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--02-armia'
        }, {
          url: '/',
          title: 'Наука',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--05-nauka'
        }, {
          url: '/',
          title: 'Недвижимость',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--12-infographics',
          width: 33,
          height: 22
        }, {
          url: '/',
          title: 'Страна',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--06-strana'
        }, {
          url: '/',
          title: 'Культура',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--10-kultura'
        }, {
          url: '/',
          title: 'Спорт',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--03-sport'
        }, {
          url: '/',
          title: 'Спецпроекты',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--menu-icons--11-special_projects'
        }
      ],
      mobiFooterMenu,
      socialMenu: [
        {
          url: 'http://facebook.com/izvestia.ru',
          icon: '/sprite/sprite-svg.svg?v=1.3#footer--social--facebook_white'
        }, {
          url: 'https://vk.com/izvestia',
          icon: '/sprite/sprite-svg.svg?v=1.3#footer--social--vk_white'
        }, {
          url: 'https://twitter.com/izvestia_ru',
          icon: '/sprite/sprite-svg.svg?v=1.3#footer--social--twitter_white'
        }, {
          url: 'https://ok.ru/group/53243993063542',
          icon: '/sprite/sprite-svg.svg?v=1.3#footer--social--ok_white'
        }, {
          url: 'https://t.me/izvestia',
          icon: '/sprite/sprite-svg.svg?v=1.3#footer--social--telegram',
          width: 30,
          height: 22
        }, {
          url: 'https://www.instagram.com/izvestia_ru/',
          icon: '/sprite/sprite-svg.svg?v=1.3#footer--social--instagram_white'
        }, {
          url: 'https://www.youtube.com/channel/UCpusbvpcIFlVxax9KajEijg',
          icon: '/sprite/sprite-svg.svg?v=1.3#footer--social--youtube-white',
          width: 46,
          height: 20
        }, {
          url: 'https://flipboard.com/@IZ_RU',
          icon: '/sprite/sprite-svg.svg?v=1.3#footer--social--flipboard_white'
        }
      ],
      secondLogoItems: [
        {
          url: '/',
          title: 'НМГ',
          iconType: 'svg',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--channels--logo-nmg',
          addClass: 'nmg',
          width: 51,
          height: 32
        }, {
          url: '/',
          title: 'Новости РЕН ТВ',
          iconType: 'svg',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--channels--logo_ren_white',
          addClass: 'rentv'
        }, {
          url: '/',
          title: 'Новости 5 канала',
          iconType: 'svg',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--channels--logo_5_white',
          addClass: 'fivetv'
        }, {
          url: '/',
          title: 'Новости 78 канала',
          iconType: 'svg',
          icon: '/sprite/sprite-svg.svg?v=1.3#header--channels--logo_78_white',
          addClass: 'tv78'
        }, {
          url: '/',
          title: 'Спорт Экспресс',
          iconType: 'img',
          icon: logoSE,
          addClass: 'se'
        }, {
          url: '/',
          title: 'More TV',
          iconType: 'img',
          icon: logoMoreTv,
          addClass: 'more'
        }
      ],
      newspaperMenuItems: [
        {
          url: '/',
          title: 'Газета',
          icon: logoNewspaper
        }, {
          url: '/',
          title: 'Приложения',
          icon: logoNewspaperPlus
        }, {
          url: '/',
          title: 'Подписка',
          icon: ''
        }
      ]
    }
  },
  methods: {
    handleScroll (evt, el) {
      // console.log(el)
      if (window.scrollY > 50) {
        // el.setAttribute(
        //   'style',
        //   'opacity: 1; transform: translate3d(0, -10px, 0)'
        // )
      }
      return window.scrollY > 100
    }
  }
}
</script>

<style lang="scss">
@import "/assets/style/utils/vars";
@import "/assets/style/utils/mixins";
/* header-iz */
.header-iz__back {
  @media screen and (max-width: $tableWidth) {
    height: 50px;
  }
}
.header-iz {
  display: grid;
  grid-template-columns: 175px 2fr 1fr 84px 42px;
  background: linear-gradient($gradientStart, $gradientEnd);
  // background-color: #65319c;
  height: 50px;
  top: 0px;
  position: relative;
  z-index: 5000;
  max-width: $desktopWidth;
  width: 100%;
  padding: $DectopPd;
  .mobile-logo {
    display: none;
  }
  .mobile-item__label {
    color: #fff;
    font-size: 16px;
    @media screen and (max-width: $tableWidth) {
      text-transform: uppercase;
    }
  }
  .mobile-item__title {
    color: $miniMenuTitle;
    font-size: 16px;
    @media screen and (max-width: $tableWidth) {
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  .mobile-footer {
    display: none;
  }
  .logo-container {
    padding: 10px 0px;
    z-index: 100;
    .logo {
      .logo-img {
        height: 32px;
        width: 152px;
      }
    }
  }
  .menu {
    flex: 1 1 auto;
  }
  .menu-open {
    cursor: pointer;
    display: none;
    position: absolute;
    top: 0px;
  }
  .menu-mini__label {
    display: none;
    padding: 10px 5px;
  }
  .rubrics {
    display: none;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    position: absolute;
    background: $miniMenu;
    padding: 20px;
    left: 0px;
    right: 0px;
    border-bottom: 4px solid $secondColor;
    z-index: 1000;

    @media screen and (max-width: $tableWidth) {
      grid-template-columns: repeat(1, 1fr);
      display: grid;
      margin: 0px 15px;
      padding: 5px 0px;
      font-size: 14px;
      position: relative;
      border-bottom: 1px solid $borderMobile;
      .rubric-item a {
        padding: 4px 0;
        align-items: center;
      }
    }
    @media (min-width: $phoneWidth) and (max-width: $tableWidth) {
      grid-template-columns: repeat(2, 1fr);
      .rubric-item:nth-child(2n) {
        border-right: none;
      }
    }
    @media (min-width: $tableWidth) and (max-width: $desktopWidthFix) {
      grid-template-columns: repeat(3, 1fr);
      .rubric-item:nth-child(3n) {
        border-right: none;
      }
    }
    @media (min-width: $desktopWidth) {
      .rubric-item:nth-child(4n) {
        border-right: none;
      }
    }
    .rubric-item {
      border-right: 1px solid #fff;
      @media screen and (max-width: $tableWidth) {
        border-right: none;
      }
      & > a,
      span {
        display: flex;
        text-decoration: none;
        padding: 10px 0px;
        cursor: pointer;
        color: #fff;
        @include transition-all;
        &:hover {
          text-decoration: underline;
        }
      }
      .rubric-item__icon {
        margin-right: 10px;
        width: 20px;
        height: 20px;
      }
    }
  }
  .rubrics-items {
    width: 100px;
    .rubrics-items__box {
      display: flex;
      height: 50px;
      align-items: center;
      @include transition-all;
      @media (min-width: $tableWidth) {
        &:hover {
          background: $urlBgHover;
        }
      }
      @media screen and (max-width: $tableWidth) {
        height: auto;
      }
      .rubrics-items__img {
        margin-left: 7px;
        height: 13px;
        width: 13px;
        @include transition-all;
        @media screen and (max-width: $tableWidth) {
          display: none;
        }
      }
      .rubrics-items__text {
        text-decoration: none;
        padding: 8px 7px;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        @include transition-all;

        @media screen and (max-width: $tableWidth) {
          width: 100%;
          border-top: 1px solid $borderMobile;
          padding: 8px 0 0 0;
          margin: 7px 15px 0px 15px;
          font-size: 16px;
          color: $miniMenuTitle;
          font-weight: 600;
        }
      }
    }
    @media (min-width: $tableWidth) {
      &:hover {
        .rubrics {
          display: grid;
        }
        .rubrics-items__img {
          transform: rotate(180deg);
        }
      }
    }
  }
  ul.menu-items {
    list-style-type: none;
    display: flex;
    align-items: center;
    min-height: 50px;
  }
  .menu-item {
    & > a {
      display: flex;
      text-decoration: none;
      padding: 8px 7px;
      height: 50px;
      align-items: center;
      cursor: pointer;
      @include transition-all;

      @media screen and (max-width: $tableWidth) {
        height: 33px;
      }
      &:hover {
        background: $urlBgHover;
      }
    }
  }
  .menu-items__box {
    display: block;
    flex-wrap: wrap;
    z-index: 1000;
  }
  .burger {
    display: none;
    float: left;
    height: 50px;
    width: 50px;
    position: absolute;
    z-index: 50;
    @include transition-all;

    @media screen and (max-width: $smDesktopWidth) {
      display: block;
      width: 42px;
      cursor: pointer;
    }
    @media screen and (max-width: $tableWidth) {
      display: block;
    }

    %burger-item-shared {
      position: absolute;
      background: #fff;
      width: 19px;
      height: 2px;
    }
    .burger__box {
      position: relative;
      top: 25px;
      width: 20px;
      height: 2px;
      cursor: pointer;
      margin-left: 10px;
      @media (min-width: $tableWidth) and (max-width: $desktopWidth) {
        height: 4px;
      }
      .burger__item {
        right: 0px;
        margin-top: -3px;
        opacity: 1;
        top: 50%;
        @include transition-all;
        @extend %burger-item-shared;

        &:before {
          top: 5px;
          content: "";
          display: block;
          @include transition-all;
          @extend %burger-item-shared;
        }
        &:after {
          bottom: 5px;
          content: "";
          display: block;
          @include transition-all;
          @extend %burger-item-shared;
        }
      }
    }
    .burger-on__box {
      position: relative;
      top: 25px;
      width: 20px;
      height: 2px;
      cursor: pointer;
      margin-left: 10px;
      @media (min-width: $tableWidth) and (max-width: $desktopWidth) {
        height: 4px;
      }
      .burger-on__item {
        right: 0px;
        margin-top: -3px;
        opacity: 1;
        top: 50%;
        background: #6f6f6f00;
        @extend %burger-item-shared;
        @include transition-all;
        &:before {
          content: "";
          display: block;
          @include transition-all;
          @extend %burger-item-shared;
          transform: rotate(45deg);
          top: 0px;
        }
        &:after {
          content: "";
          display: block;
          @include transition-all;
          @extend %burger-item-shared;
          transform: rotate(-45deg);
          bottom: 0px;
        }
      }
    }
  }
  .logos {
    height: 50px;
    overflow: hidden;
    .logos-container {
      display: flex;
      flex-wrap: wrap;
      .logos-item {
        text-align: center;
        .logos-item__url {
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logos-item__text {
          opacity: 0;
          width: 0px;
          height: 0px;
          display: none;
        }

        %logos-item-size__shared {
          max-width: 33px;
          max-height: 33px;
        }
        .nmg {
          width: 65px;
          .logos-item__logo {
            max-width: 52px;
            max-height: 33px;
          }
          &:hover {
            background: #222;
          }
        }
        .rentv {
          .logos-item__logo {
            @extend %logos-item-size__shared;
          }
          &:hover {
            background: #ea4524;
          }
        }
        .fivetv {
          .logos-item__logo {
            @extend %logos-item-size__shared;
          }
          &:hover {
            background: #ef0b41;
          }
        }
        .tv78 {
          .logos-item__logo {
            @extend %logos-item-size__shared;
          }
          &:hover {
            background: #e64a6d;
          }
        }
        .se {
          .logos-item__logo {
            @extend %logos-item-size__shared;
          }
          &:hover {
            background: #e64437;
          }
        }
        .more {
          &:hover {
            background: #373a36;
          }
        }
      }
    }
  }
  .fix-black-bg {
    z-index: 1050;
    position: fixed;
    display: none;
    opacity: 1;
    background: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    &.active {
      @media screen and (max-width: $tableWidth) {
        display: block;
      }
    }
  }
  .search {
    width: 42px;
    z-index: 120;
    &.active {
      .search-form {
        display: block;
      }

      .search-close {
        @media screen and (max-width: $tableWidth) {
          display: flex;
        }
      }
    }
    @media screen and (max-width: $tableWidth) {
      width: 100%;
      justify-content: flex-end;
      display: flex;
      .search-form__box {
        width: 100%;
      }
    }
    .search__box {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 50px;
      cursor: pointer;
      &:hover {
        @media (min-width: $tableWidth) {
          background: $urlBgHover;
        }
      }
      .search-icon {
        @include size(26px, 26px);
      }
    }
    .search-close {
      background: $secondColor;
      display: none;
      position: absolute;
      width: 50px;
      height: 50px;
      z-index: 1100;
      right: 0px;
      justify-content: center;
      align-items: center;
    }
    .search-form {
      display: none;
      .search-form__box {
        position: absolute;
        right: 33px;
        top: 0px;
        z-index: 1100;
        @media screen and (max-width: $smDesktopWidth) {
          right: 20px;
        }
        @media screen and (max-width: $tableWidth) {
          top: 50px;
          right: 0px;
        }
        .search-form__input__box {
          input {
            color: #000;
            box-sizing: border-box;
            padding: 0 40px 0 10px;
            border: 1px solid #e9e9e9;
            width: 470px;
            height: 40px;
            margin-top: 5px;
            z-index: 202;
            font-size: 16px;
            @media screen and (max-width: $tableWidth) {
              width: 100%;
            }
          }
        }
        .search-form__content {
          .search-form__input-icon {
            position: absolute;
            right: 0px;
            top: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            cursor: pointer;
            @include size(40px);
            .search-icon__box {
              @include size(30px, 34px);
              .search-icon {
                @include size(30px, 34px);
              }
            }
          }
        }
      }
    }
  }
  .newspaper {
    @media screen and (max-width: $tableWidth) {
      display: none;
    }
    .newspaper__box {
      display: flex;
      height: 50px;
      justify-content: center;
      background: $newspaper;
      align-items: center;
      cursor: pointer;
      @include transition-all;
      &:hover {
        background: $urlBgHover;
        .newspape__arrow {
          transform: rotate(180deg);
        }
        .newspaper-menu {
          opacity: 1;
          visibility: visible;
        }
      }
      .newspape__arrow {
        margin-left: 5px;
        @include size(14px, 14px);
        @include transition-all;
      }
      .newspaper-menu {
        cursor: default;
        @include transition-all;
        background: #976e74;
        color: #fff;
        border-bottom: 4px solid $secondColor;
        padding: 20px 40px 5px 20px;
        position: absolute;
        right: 0;
        top: 50px;
        opacity: 0;
        visibility: hidden;
        .newspaper-menu__box {
          .newspaper-item {
            margin-bottom: 15px;
            a {
              display: flex;
            }
            .newspaper-item__icon {
              width: 23px;
              height: 19px;
            }
            .newspaper-item__text {
              font-size: 16px;
              color: #ffffff;
              margin-left: 10px;
              border-bottom: 1px solid rgba(255, 255, 255, 0);
              @include transition-all;
            }
            &:hover {
              .newspaper-item__text {
                border-bottom: 1px solid rgba(255, 255, 255, 1);
              }
            }
          }
        }
      }
      .newspaper__icon {
        @include size(50px, 35px);
      }
    }
  }
  @media screen and (max-width: $smDesktopWidth) {
    padding: $smDesktopPd;
  }
  @media screen and (max-width: $phoneWidth) {
    padding: $phonePd;
  }
  @media screen and (max-width: $tableWidth) {
    display: block;
    position: fixed;
    width: 100%;
    padding: $tablePd;
    .logo-container {
      padding: 10px 0px;
      display: flex;
      left: 60px;
      right: 60px;
      position: absolute;
      justify-content: center;
      .logo {
        display: none;
      }
      .mobile-logo {
        display: flex;
        .logo-menu-open {
          cursor: pointer;
          .logo-container__mobile {
            display: flex;
            .logo-img {
              height: 33px;
              width: 152px;
            }
            .logo-menu__arrow {
              margin-left: 10px;
              @include transition-all;
            }
          }
        }
        .logo__menu {
          display: none;
          position: absolute;
          top: 50px;
          left: -60px;
          right: -60px;
          .logo__menu-item {
            display: block;
            a {
              height: 50px;
              margin: 0 auto;
              width: 200px;
              display: flex;
              align-items: center;
              .menu-item__icon {
                width: 33px;
                height: 33px;
              }
              .menu-item__text {
                padding-left: 20px;
                color: #ffffff;
              }
            }
          }
          .iz-color {
            background: $izColor;
          }
          .newspaper-color {
            background: $newspaper;
          }
          .rentv {
            background: $renTvColor;
          }
          .fivetv {
            background: $fiveTvColor;
          }
        }
      }
    }
    .logos {
      display: none;
    }
    .menu-open {
      display: block;
    }
    .menu-close {
      display: none;
    }
    .menu-items__box {
      display: none;
      position: absolute;
      top: 50px;
      left: 0px;
      right: 0px;
      background: $defaultBg;
      bottom: 0px;
    }
    .mobile-footer {
      display: block;
      .mobile-newspaper__items__box {
        margin: 0px 15px;
        .mobile-newspaper__item {
          display: flex;
          padding: 10px 0px;
          border-bottom: 1px solid $borderMobile;
          .mobile-newspaper__item-icon {
            @include size(23px, 19px);
          }
          .mobile-newspaper__item-label {
            padding-left: 10px;
            font-size: 16px;
            letter-spacing: 0.06em;
            font-weight: bold;
          }
        }
      }
      .mobile-main-news {
        margin: 5px 15px;
        .mobile-main-news__header {
          padding: 10px 0px;
        }
        .mobile-main-news__items__box {
          .mobile-main-news__item {
            display: block;
            padding: 5px 0px;
            .mobile-main-news__item-label {
              letter-spacing: 0.06em;
            }
          }
        }
      }
      .mobile-footer-menu {
        margin: 10px 15px;
        display: grid;
        grid-template-columns: 1fr 65px;
        border-top: 1px solid $borderMobile;
        border-bottom: 1px solid $borderMobile;
        .mobile-footer-menu__box {
          padding: 15px 0px;
          border-right: 1px solid $borderMobile;
          .mobile-footer-menu__item {
            padding: 7px 0px;
            display: block;
            color: #fff;
          }
        }
        .mobile-footer-social__box {
          display: flex;
          flex-wrap: wrap;
          padding: 20px 0px;
          justify-content: center;
          height: max-content;
          .mobile-footer__social-item {
            opacity: 0.5;
            display: flex;
            align-items: center;
            @include transition-all;
            &:hover {
              opacity: 1;
            }
            .social-item__url {
              display: block;
              .social-item__icon {
              }
            }
          }
        }
      }
      .footer-mobile-menu-bottom-wrapper {
        margin: 10px 15px;
        .text-block-mobile {
          color: #fff;
          p {
            padding-bottom: 15px;
            a {
              color: #fff;
              border-bottom: 1px solid #fff;
            }
          }
        }
      }
    }
    .rubrics-items {
      width: 100%;
      grid-column: 1/3;
    }
  }
  @media (min-width: $phoneWidth) and (max-width: $smDesktopWidth) {
    grid-template-columns: 175px 1fr 1fr 84px 42px;
    .menu-open {
      display: block;
    }
    .menu-items__box {
      display: none;
      position: absolute;
      top: 50px;
      left: 0px;
      right: 0px;
      background: $defaultBg;
    }
    .menu-close {
      display: none;
    }
    .menu-close {
      position: absolute;
    }
    .menu-items {
      flex-wrap: wrap;
    }
  }
}

// menu-switcher checked
.menu-switcher {
  position: absolute;
  visibility: hidden;
  left: -9999px;
}
#menuSwitcher:checked ~ .header-iz {
  @media screen and (max-width: $tableWidth) {
    background: $miniMenu;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow-y: auto;
    height: auto;
    nav.menu__box {
      // left: 0;
      // position: fixed;
      width: 100%;
      ul.menu-items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        text-transform: uppercase;
      }
      .menu-items__box {
        background: $miniMenu;
        display: block;
      }
      .menu-mini__label {
        display: block;
      }
      .menu-open {
        display: none;
      }
      .menu-close {
        display: block;
      }
    }
    .logo-menu-open {
      .logo-container__mobile {
        .logo-menu__arrow {
          display: none;
        }
      }
    }
    .search {
      display: none;
    }
  }
  @media (min-width: $tableWidth) and (max-width: $smDesktopWidth) {
    nav.menu__box {
      left: 0;
      .menu-items__box {
        display: block;
      }
      .menu-open {
        display: none;
      }
      .menu-close {
        display: block;
      }
    }
  }
}
#menuLogoSwitcher:checked ~ .logo__menu {
  display: block;
}
#menuLogoSwitcher:checked ~ .logo-menu-open {
  .logo-container__mobile {
    .logo-menu__arrow {
      transform: rotate(180deg);
    }
  }
}

// .marquee {
//     position: relative;
//     overflow: hidden;
//     --offset: 20vw;
//     --move-initial: calc(-25% + var(--offset));
//     --move-final: calc(-50% + var(--offset));
// }

.marquee {
  height: 32px;
  overflow: hidden;
  position: relative;
  display: flex;
  margin: 0px;
  padding: 0px;
  justify-content: left;
  background: #4e4e46;
  z-index: 500;
  max-width: $desktopWidth;
  margin: auto;
  @include transition-all;
  @media screen and (max-width: $tableWidth) {
    display: none;
  }
  &:hover {
    .marquee__inner {
      animation-play-state: paused;
    }
  }
  .marquee__inner {
    display: flex;
    flex-wrap: nowrap;
    animation: marquee 55s linear infinite;
  }
  .marquee-item__box {
    .marquee-item {
      padding: 0px 10px;
      // font-size: 16px;
      letter-spacing: 1px;
      color: #fff;
      display: flex;
      height: 32px;
      align-items: center;
      font-weight: 300;
      @include transition-all;
      &.urgently {
        background-color: $urgentlyColor;
      }
      &:hover {
        background: $mainColor;
      }
      .marquee-item__label__news {
        white-space: nowrap;
        letter-spacing: 0px;
      }
      .marquee-item__category {
        text-transform: uppercase;
        font-size: 11px;
        padding: 2px 5px;
        white-space: nowrap;
        border: 1px solid #fff;
        margin-right: 5px;
        @include transition-all;
      }
    }
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.scroll-top-btn__box {
  .scroll-top-btn {
    position: fixed;
    opacity: 0;
    visibility: hidden;
    width: 50px;
    height: 50px;
    bottom: 50px;
    z-index: 10;
    left: 20px;
    border-radius: 100px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
    background: #787878;
    display: flex;
    align-items: center;
    cursor: pointer;
    @include transition-all;

    @media screen and (max-width: $tableWidth) {
      bottom: 10px;
      left: 10px;
      width: 40px;
      height: 40px;
      .scroll-top-btn__icon {
        width: 15px;
      }
    }
    &:hover {
      background: $mainHover;
    }
    &.active {
      opacity: 1;
      visibility: visible;
    }
    .scroll-top-btn__icon {
      width: 18px;
      margin: 0px auto;
      transform: rotate(180deg);
    }
  }
}
</style>
