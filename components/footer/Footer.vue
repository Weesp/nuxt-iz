<template>
  <footer class="footer">
    <div class="container">
      <input
        id="footerBottom"
        type="checkbox"
        class="menu-switcher"
        @:change="footerVisible"
      >
      <div class="footer-top">
        <div class="footer-top__box">
          <div class="footer-top__menu">
            <label for="footerBottom" class="logo-menu-open">
              <div class="menu__box">
                <img
                  src="@/assets/img/icons/white-arrow-top.png"
                  alt="white arrow"
                  class="menu__icon"
                >
                <div class="menu__text">Меню</div>
              </div>
            </label>
          </div>
          <div class="footer-top__social">
            <div class="social-item">
              <a href="/" class="social-item__url" target="_blank">
                <svg class="social-item__icon" style="width: 30px; height: 30px">
                  <use
                    width="30"
                    height="30"
                    xlink:href="/sprite/sprite-svg.svg?v=1.3#footer--social--facebook_white"
                    href="/sprite/sprite-svg.svg?v=1.3#footer--social--facebook_white"
                  />
                </svg>
              </a>
            </div>
            <div class="social-item">
              <a href="/" class="social-item__url" target="_blank">
                <svg class="social-item__icon" style="width: 30px; height: 30px">
                  <use
                    width="30"
                    height="30"
                    xlink:href="/sprite/sprite-svg.svg?v=1.3#footer--social--vk_white"
                    href="/sprite/sprite-svg.svg?v=1.3#footer--social--vk_white"
                  />
                </svg>
              </a>
            </div>
            <div class="social-item">
              <a href="/" class="social-item__url" target="_blank">
                <svg class="social-item__icon" style="width: 30px; height: 30px">
                  <use
                    width="30"
                    height="30"
                    xlink:href="/sprite/sprite-svg.svg?v=1.3#footer--social--twitter_white"
                    href="/sprite/sprite-svg.svg?v=1.3#footer--social--twitter_white"
                  />
                </svg>
              </a>
            </div>
            <div class="social-item">
              <a href="/" class="social-item__url" target="_blank">
                <svg class="social-item__icon" style="width: 30px; height: 30px">
                  <use
                    width="30"
                    height="30"
                    xlink:href="/sprite/sprite-svg.svg?v=1.3#footer--social--ok_white"
                    href="/sprite/sprite-svg.svg?v=1.3#footer--social--ok_white"
                  />
                </svg>
              </a>
            </div>
            <div class="social-item">
              <a href="/" class="social-item__url" target="_blank">
                <svg class="social-item__icon" style="width: 30px; height: 30px">
                  <use
                    width="30"
                    height="30"
                    xlink:href="/sprite/sprite-svg.svg?v=1.3#footer--social--flipboard_white"
                    href="/sprite/sprite-svg.svg?v=1.3#footer--social--flipboard_white"
                  />
                </svg>
              </a>
            </div>
            <div class="social-item">
              <a href="/" class="social-item__url" target="_blank">
                <svg class="social-item__icon" style="width: 30px; height: 30px">
                  <use
                    width="30"
                    height="30"
                    xlink:href="/sprite/sprite-svg.svg?v=1.3#footer--social--instagram_white"
                    href="/sprite/sprite-svg.svg?v=1.3#footer--social--instagram_white"
                  />
                </svg>
              </a>
            </div>
            <div class="social-item">
              <a href="/" class="social-item__url" target="_blank">
                <svg class="social-item__icon" style="width: 46px; height: 20px">
                  <use
                    width="46"
                    height="20"
                    xlink:href="/sprite/sprite-svg.svg?v=1.3#footer--social--youtube-white"
                    href="/sprite/sprite-svg.svg?v=1.3#footer--social--youtube-white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="footer-top__subscription">
            <a href="https://subscribe.iz.ru/" class="subscription__url" target="_blanc">
              <div class="subscription__text">Подписка на газету</div>
            </a>
            <a href="http://eepurl.com/cVRA-9" class="subscription__url" target="_blanc">
              <div class="subscription__text">Подписка на новости</div>
            </a>
          </div>
          <div class="footer-top__rss">
            <a href="/xml/rss/all.xml" class="rss__url" target="_blanc">
              <svg class="rss__icon">
                <use
                  width="23"
                  height="23"
                  xlink:href="/sprite/sprite-svg.svg?v=1.3#footer--icon_rss"
                  href="/sprite/sprite-svg.svg?v=1.3#footer--icon_rss"
                />
              </svg>
              <div class="rss__text">RSS</div>
            </a>
          </div>
          <div class="footer-top__pegi">
            <img src="@/assets/img/icons/pegi-18.svg" alt="pegi 18" class="rss__icon">
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom__box">
            <div class="footer-bottom__menu">
              <div class="menu__box">
                <li class="menu-item">
                  <a href="/">О компании</a>
                </li>
                <li class="menu-item">
                  <a href="/">Редакция</a>
                </li>
                <li class="menu-item">
                  <a href="/" target="_blanc">Пресс-центр</a>
                </li>
                <li class="menu-item">
                  <a href="/">Реклама</a>
                </li>
                <li class="menu-item">
                  <a href="/">Новости о нас</a>
                </li>
                <li class="menu-item">
                  <a href="/">Пользовательское соглашение</a>
                </li>
                <li class="menu-item">
                  <a href="/">Охрана труда</a>
                </li>
              </div>
            </div>
            <div class="footer-bottom__copyright">
              <p>Авторское право на систему визуализации содержимого портала iz.ru, а также на исходные данные, включая тексты, фотографии, аудио- и видеоматериалы, графические изображения, иные произведения и товарные знаки принадлежит ООО «МИЦ «Известия». Указанная информация охраняется в соответствии с законодательством РФ и международными соглашениями.</p>
              <p>Частичное цитирование возможно только при условии гиперссылки на iz.ru.</p>
              <p>АО «АБ «РОССИЯ» — партнер рубрики «Экономика»</p>
              <p>
                Сайт функционирует
                <nobr>при финансовой</nobr> поддержке Федерального агентства
                <nobr>по печати</nobr>
                <nobr>и массовым</nobr> коммуникациям.
              </p>
            </div>
            <div class="footer-bottom__disclaimer">
              <p>Ответственность за содержание любых рекламных материалов, размещенных на портале, несет рекламодатель.</p>
              <p>Новости, аналитика, прогнозы и другие материалы, представленные на данном сайте, не являются офертой или рекомендацией к покупке или продаже каких-либо активов.</p>
              <p>
                Зарегистрировано Федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций.
                Свидетельства о регистрации
                <a
                  href="http://rkn.gov.ru/mass-communications/reestr/media/?id=630443"
                  target="_blank"
                >ЭЛ № ФС 77 - 76208 от 8 июля 2019 года</a>,
                <a
                  href="http://rkn.gov.ru/mass-communications/reestr/media/?id=630951"
                  target="_blank"
                >ЭЛ № ФС 77 - 72003 от 26 декабря 2019 года</a>
              </p>
              <p>Все права защищены © ООО «МИЦ «Известия», 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { getHeight } from '@/plugins/CustomFunction'

export default {
  methods: {
    footerVisible () {
      const targetFooter = document.querySelector('.footer-top')
      if (this.checked) {
        const height = getHeight(document.querySelector('.footer-bottom'))
        targetFooter.style.height = height + 37 + 'px'
      } else {
        targetFooter.style.height = 37 + 'px'
      }
    }
  }
}
</script>

<style lang="scss">
// footer style
@import "/assets/style/utils/vars";
@import "/assets/style/utils/mixins";

.footer {
  position: relative;
  z-index: 5000;

  @media screen and (max-width: $tableWidth) {
    display: none;
  }
  .footer-top {
    position: fixed;
    width: 100%;
    height: 0px;
    padding-top: 37px;
    overflow: hidden;
    bottom: 0px;
    max-width: $desktopWidth;
    @include transition-all(0.3s);

    &.active {
      padding-top: 0px;
    }
    .footer-top__box {
      background: #2c2c2c;
      display: grid;
      grid-template-columns: minmax(64px, 100px) minmax(165px, 1fr) minmax(160px, 1fr) 75px 40px;
      height: 37px;
      padding: $DectopPd;
      @media screen and (max-width: $smDesktopWidth) {
        padding: $smDesktopPd;
      }
      @media screen and (max-width: $tableWidth) {
        padding: $tablePd;
      }
      @media screen and (max-width: $phoneWidth) {
        padding: $phonePd;
      }

      .footer-top__menu {
        justify-self: flex-start;
        .menu__box {
          display: flex;
          height: 37px;
          align-items: center;
          min-width: 64px;
          cursor: pointer;
          @include transition-all(0.2s);

          &:hover {
            background: $mainHover;
          }
          .menu__text {
            font-size: 12px;
            padding-right: 10px;
            color: #ffffff;
          }
          .menu__icon {
            padding: 0 5px 0 10px;
            @include transition-all;
          }
        }
      }
      .footer-top__social {
        display: flex;
        height: 37px;
        align-items: center;
        overflow: hidden;

        .social-item {
          .social-item__url {
            opacity: 0.5;
            display: block;
            @include transition-all(0.2s);

            &:hover {
              opacity: 1;
            }
          }
        }
      }
      .footer-top__subscription {
        display: flex;
        height: 37px;
        justify-content: flex-end;
        .subscription__url {
          color: #ffffff;
          display: flex;
          height: 37px;
          align-items: center;
          padding: 0px 10px;
          &:hover {
            background: $mainHover;
          }
        }
        .subscription__text {
          text-align: center;
          font-size: 12px;
        }
      }
      .footer-top__rss {
        .rss__url {
          display: flex;
          height: 37px;
          justify-content: center;
          align-items: center;
          color: #ffffff;

          @include transition-all(0.2s);

          &:hover {
            background: $mainHover;
          }
          .rss__text {
            font-size: 12px;
            padding-left: 5px;
          }
        }
        .rss__icon {
          @include size(23px, 23px);
        }
      }
      .footer-top__pegi {
        display: flex;
        height: 37px;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .footer-bottom {
    // height: 0px;
    background: #2c2c2c;
    border-top: 1px solid #424242;
    @include transition-all;
    .footer-bottom__box {
      padding: 17px 33px 23px;
      display: grid;
      grid-template-columns: minmax(140px, 200px) 1fr 1fr;
      grid-column-gap: 10px;
      @media screen and (max-width: $tableWidth) {
        grid-template-columns: 120px 1fr 1fr;
        padding: 17px 15px 23px;
      }
      @media (min-width: $tableWidth) and (max-width: $smDesktopWidth) {
        grid-template-columns: 140px 1fr 1fr;
        padding: 17px 25px 23px;
      }
      .footer-bottom__menu {
        .menu__box {
          .menu-item {
            a {
              color: #dddddd;
              font-weight: bold;
              font-size: 16px;
              border-bottom: 1px solid rgba(255, 255, 255, 0);
              @include transition-all(0.2s);

              @media screen and (max-width: $tableWidth) {
                font-size: 12px;
              }
              @media (min-width: $tableWidth) and (max-width: $smDesktopWidth) {
                font-size: 14px;
              }

              &:hover {
                border-bottom: 1px solid rgba(255, 255, 255, 1);
              }
            }
          }
        }
      }
      .footer-bottom__copyright {
        font-size: 12px;
        line-height: 17px;
        color: #aaa;
        font-weight: 300;
        @media screen and (max-width: $tableWidth) {
          font-size: 10px;
        }
        p {
          margin-bottom: 9px;
        }
      }
      .footer-bottom__disclaimer {
        font-size: 12px;
        line-height: 17px;
        color: #aaa;
        font-weight: 300;
        @media screen and (max-width: $tableWidth) {
          font-size: 10px;
        }
        p {
          margin-bottom: 9px;
        }
        a {
          color: #ddd;
          border-bottom: 1px solid rgba(255, 255, 255, 1);
          @include transition-all(0.2s);
          &:hover {
            border-bottom: 1px solid rgba(255, 255, 255, 0);
          }
        }
      }
    }
  }
}

// checked footerBottom

#footerBottom:checked ~ .footer-top {
  .menu__icon {
    padding: 0 10px 0 5px;
    transform: rotate(180deg);
  }
}

</style>
