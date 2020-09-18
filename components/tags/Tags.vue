<template>
  <div class="tags-content__box">
    <div class="tag-title">
      <div v-if="mainTag && mainTag.id" class="tag-title__box">
        <img
          v-if="mainTag.icon"
          class="tag-title-image"
          src="@/assets/img/tags/header-title-img.webp"
          :alt="'Все новости с тегом ' + mainTag.title"
        >
        <div class="tag-title__background">
          <div class="background-mask">
            <img
              class="background-img"
              src="@/assets/img/tags/header-background.webp"
              alt="Background iz tags"
            >
          </div>
        </div>
        <div class="tag-title-content">
          <div v-if="mainTag.title" class="tag-title-content__box">
            <div class="tag-title-content__label">
              Все новости с тегом
            </div>
            <div class="tag-title-content__title">
              {{ mainTag.title }}
            </div>
            <div v-if="mainTag.description" class="tag-title-content__text">
              {{ mainTag.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tag-tabs">
      <div id="tabsEvent" class="tag-tabs__box">
        <a href="/" class="tag-tabs-item active">
          <div class="tag-tabs-item__text">
            Все материалы
          </div>
        </a>
        <a href="/" class="tag-tabs-item">
          <div class="tag-tabs-item__text">
            Публикации
          </div>
        </a>
        <a href="/" class="tag-tabs-item">
          <div class="tag-tabs-item__text">
            Фотографии
          </div>
        </a>
        <a href="/" class="tag-tabs-item">
          <div class="tag-tabs-item__text">
            Видео
          </div>
        </a>
      </div>
    </div>
    <div class="tabs-content">
      <div v-for="(page, index) in paginatedData" :key="index">
        <div v-if="page.template === 'materials'" class="tag-materials">
          <div class="tag-materials__box">
            <div class="tag-materials-item__box">
              <a
                v-for="(item, indx) in page.items"
                :key="indx"
                href="/"
                class="tag-materials-item"
              >
                <div class="tag-materials-item__date">
                  {{ item.date.published ? localeDate(item.date.published) : item.date }}
                </div>
                <div class="tag-materials-item__title">
                  {{ item.title }}
                </div>
                <div class="tag-materials-item__text">
                  {{ item.text }}
                </div>
              </a>
            </div>
          </div>
        </div>
        <div v-if="page.template === 'videos' && page.items.length" class="tag-videos tag-materials">
          <div class="tag-video-header">
            <div class="tag-video-header__box">
              <div class="tag-video-header__icon__box">
                <svg class="tag-video-header__icon">
                  <use
                    width="20"
                    height="20"
                    xlink:href="/sprite/sprite-svg.svg?v=1.3#index--SVG_icons_type_materials--icon_video"
                    href="/sprite/sprite-svg.svg?v=1.3#index--SVG_icons_type_materials--icon_video"
                  />
                </svg>
              </div>
              <div class="tag-video-header__title">
                Видео
              </div>
              <div class="tag-section__line" />
            </div>
          </div>
          <div
            class="tag-video__box"
          >
            <div
              v-for="item in page.items"
              :key="item.id"
              class="tag-video-item__box"
            >
              <a v-if="item.path && item.title" :href="item.path" class="tag-video-item">
                <div class="tag-video-item__box">
                  <div class="tag-video-item__image__box">
                    <img
                      v-if="item.previews && item.previews['900x506']"
                      :src="item.previews['900x506'].path"
                      :alt="item.title"
                      class="tag-video-item__image"
                    >
                    <div class="tag-video-item__time__box">
                      <div class="tag-video-item__time-icon__box">
                        <svg class="tag-video-item__time-icon">
                          <use
                            width="20"
                            height="20"
                            xlink:href="/sprite/sprite-svg.svg?v=1.3#index--SVG_icons_type_materials--icon_video"
                            href="/sprite/sprite-svg.svg?v=1.3#index--SVG_icons_type_materials--icon_video"
                          />
                        </svg>
                      </div>
                      <div v-if="item.duration" class="tag-video-item__time-value">
                        {{ timeFormat(+item.duration) }}
                      </div>
                    </div>
                    <div class="tag-video-item__play__box">
                      <svg class="tag-video-item__play">
                        <use
                          width="40"
                          height="40"
                          xlink:href="/sprite/sprite-svg.svg?v=1.3#videos--top--icon_play_no_bg"
                          href="/sprite/sprite-svg.svg?v=1.3#videos--top--icon_play_no_bg"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="tag-video-item__text__box">
                    <div class="tag-video-item__text-date">
                      {{ localeDate(item.date.published) }}
                    </div>
                    <div class="tag-video-item__text-title">
                      {{ item.title }}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="tag-populations tag-materials">
        <div class="population-header">
          <div class="population-header__box">
            <img src="@/assets/img/tags/icon-longread.svg" alt="Популярные материалы" class="population-header__icon">
            <div class="population-header__title">
              Популярные материалы
            </div>
            <div class="tag-section__line" />
          </div>
        </div>
        <div class="population-materials__box">
          <a href="/" class="population-material">
            <div class="population-material__box">
              <div class="population-material__image__box">
                <img src="@/assets/img/tags/image-1.webp" alt="Лукашенко поставил задачу усилить идеологическую работу перед выборами" class="population-material__image">
              </div>
              <div class="population-material__text__box">
                <div class="tag-materials-item__data">
                  12 декабря 2018, 00:02
                </div>
                <div class="tag-materials-item__title">
                  Лукашенко поставил задачу усилить идеологическую работу перед выборами
                </div>
                <div class="tag-materials-item__text">
                  Президент Белоруссии Александр Лукашенко заявил, что перед парламентскими и президентскими выборами в стране необходимо усилить идеологическую работу. Об этом в понедельник, 19 августа, сообщает ТАСС со ссылкой на пресс-службу белорусского лидера.
                </div>
              </div>
            </div>
          </a>
          <a href="/" class="population-material">
            <div class="population-material__box">
              <div class="population-material__image__box">
                <img src="@/assets/img/tags/image-1.webp" alt="Лукашенко поставил задачу усилить идеологическую работу перед выборами" class="population-material__image">
              </div>
              <div class="population-material__text__box">
                <div class="tag-materials-item__data">
                  12 декабря 2018, 00:02
                </div>
                <div class="tag-materials-item__title">
                  Лукашенко поставил задачу усилить идеологическую работу перед выборами
                </div>
                <div class="tag-materials-item__text">
                  Президент Белоруссии Александр Лукашенко заявил, что перед парламентскими и президентскими выборами в стране необходимо усилить идеологическую работу. Об этом в понедельник, 19 августа, сообщает ТАСС со ссылкой на пресс-службу белорусского лидера.
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="tag-query tag-materials">
        <div class="tag-query-header">
          <div class="tag-query-header__box">
            <div class="tag-query-header__title">
              Популярные запросы с этим тэгом
            </div>
            <div class="tag-section__line" />
          </div>
        </div>
        <div class="tag-query__box">
          <a href="/" class="tag-query-item">
            <div class="tag-query-item__box">
              <div class="tag-query-item__text">
                Единая валюта РФ и Белорусии
              </div>
            </div>
          </a>
          <a href="/" class="tag-query-item">
            <div class="tag-query-item__box">
              <div class="tag-query-item__text">
                Единое визовое пространство
              </div>
            </div>
          </a>
          <a href="/" class="tag-query-item">
            <div class="tag-query-item__box">
              <div class="tag-query-item__text">
                Интеграция
              </div>
            </div>
          </a>
          <a href="/" class="tag-query-item">
            <div class="tag-query-item__box">
              <div class="tag-query-item__text">
                Валаам
              </div>
            </div>
          </a>
          <a href="/" class="tag-query-item">
            <div class="tag-query-item__box">
              <div class="tag-query-item__text">
                Путин и Лукашенко
              </div>
            </div>
          </a>
          <a href="/" class="tag-query-item">
            <div class="tag-query-item__box">
              <div class="tag-query-item__text">
                Встреча в Санкт-Петербурге
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="btn-show-more__box">
        <button
          v-if="pageNumber * 3 < pageCount -3"
          class="btn-show-more"
          @click="nextPage"
        >
          Показать ещё
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { timeFormat } from '@/plugins/CustomFunction'

export default {
  data: () => ({
    pageItems: [],
    pageNumber: 0,
    sizeMaterial: 2,
    sizeVideos: 4,
    sizePhotos: 4,
    materials: [
      {
        id: '1',
        title: '1Лукашенко пообещал не допустить вступления Белоруссии в состав РФ',
        date: '14 декабря 2018, 19:05',
        text: 'Государственный суверенитет является святым, заявил на встрече с российскими журналистами в Минске в пятницу, 14 декабря, президент Белоруссии Александр Лукашенко, добавив, что он...'
      },
      {
        id: '2',
        title: '2Лукашенко пообещал не допустить вступления Белоруссии в состав РФ',
        date: '14 декабря 2018, 19:05',
        text: 'Государственный суверенитет является святым, заявил на встрече с российскими журналистами в Минске в пятницу, 14 декабря, президент Белоруссии Александр Лукашенко, добавив, что он...'
      },
      {
        id: '3',
        title: '3Лукашенко пообещал не допустить вступления Белоруссии в состав РФ',
        date: '14 декабря 2018, 19:05',
        text: 'Государственный суверенитет является святым, заявил на встрече с российскими журналистами в Минске в пятницу, 14 декабря, президент Белоруссии Александр Лукашенко, добавив, что он...'
      },
      {
        id: '4',
        title: '4Лукашенко пообещал не допустить вступления Белоруссии в состав РФ',
        date: '14 декабря 2018, 19:05',
        text: 'Государственный суверенитет является святым, заявил на встрече с российскими журналистами в Минске в пятницу, 14 декабря, президент Белоруссии Александр Лукашенко, добавив, что он...'
      },
      {
        id: '5',
        title: '5Лукашенко пообещал не допустить вступления Белоруссии в состав РФ',
        date: '14 декабря 2018, 19:05',
        text: 'Государственный суверенитет является святым, заявил на встрече с российскими журналистами в Минске в пятницу, 14 декабря, президент Белоруссии Александр Лукашенко, добавив, что он...'
      },
      {
        id: '6',
        title: '6Лукашенко пообещал не допустить вступления Белоруссии в состав РФ',
        date: '14 декабря 2018, 19:05',
        text: 'Государственный суверенитет является святым, заявил на встрече с российскими журналистами в Минске в пятницу, 14 декабря, президент Белоруссии Александр Лукашенко, добавив, что он...'
      },
      {
        id: '7',
        title: '7Лукашенко пообещал не допустить вступления Белоруссии в состав РФ',
        date: '14 декабря 2018, 19:05',
        text: 'Государственный суверенитет является святым, заявил на встрече с российскими журналистами в Минске в пятницу, 14 декабря, президент Белоруссии Александр Лукашенко, добавив, что он...'
      },
      {
        id: '8',
        title: '8Лукашенко пообещал не допустить вступления Белоруссии в состав РФ',
        date: '14 декабря 2018, 19:05',
        text: 'Государственный суверенитет является святым, заявил на встрече с российскими журналистами в Минске в пятницу, 14 декабря, президент Белоруссии Александр Лукашенко, добавив, что он...'
      },
      {
        id: '9',
        title: '9Лукашенко пообещал не допустить вступления Белоруссии в состав РФ',
        date: '14 декабря 2018, 19:05',
        text: 'Государственный суверенитет является святым, заявил на встрече с российскими журналистами в Минске в пятницу, 14 декабря, президент Белоруссии Александр Лукашенко, добавив, что он...'
      },
      {
        id: '10',
        title: '10Лукашенко пообещал не допустить вступления Белоруссии в состав РФ',
        date: '14 декабря 2018, 19:05',
        text: 'Государственный суверенитет является святым, заявил на встрече с российскими журналистами в Минске в пятницу, 14 декабря, президент Белоруссии Александр Лукашенко, добавив, что он...'
      },
      {
        id: '11',
        title: '11Лукашенко пообещал не допустить вступления Белоруссии в состав РФ',
        date: '14 декабря 2018, 19:05',
        text: 'Государственный суверенитет является святым, заявил на встрече с российскими журналистами в Минске в пятницу, 14 декабря, президент Белоруссии Александр Лукашенко, добавив, что он...'
      },
      {
        id: '12',
        title: '12Лукашенко пообещал не допустить вступления Белоруссии в состав РФ',
        date: '14 декабря 2018, 19:05',
        text: 'Государственный суверенитет является святым, заявил на встрече с российскими журналистами в Минске в пятницу, 14 декабря, президент Белоруссии Александр Лукашенко, добавив, что он...'
      }
    ],
    video: [
      {
        title: 'video1',
        id: '1'
      }, {
        title: 'video2',
        id: '2'
      }, {
        title: 'video3',
        id: '3'
      }, {
        title: 'video4',
        id: '4'
      }, {
        title: 'video5',
        id: '5'
      }, {
        title: 'vide6',
        id: '6'
      }, {
        title: 'video7',
        id: '7'
      }
    ],
    photo: [
      {
        id: 1,
        title: 'photo1'
      }, {
        id: 2,
        title: 'photo2'
      }, {
        id: 3,
        title: 'photo3'
      }
    ]
  }),
  computed: {
    ...mapState('tags', {
      mainTag: 'main',
      videos: 'videos',
      photos: 'photos'
    }),
    // ...mapGetters('tags', {
    //   videos: 'getVideos',
    //   photos: 'getPhotos'
    // }),
    pageCount () {
      const l = this.materials.length
      const s = this.sizeMaterial
      return Math.ceil(l / s)
    },
    paginatedData () {
      return this.pageItems
    }
  },
  created () {
    this.pageRender(0)
  },
  methods: {
    timeFormat,
    localeDate (date) {
      const dateObject = new Date(date * 1000)
      return dateObject.toLocaleDateString() + ', ' + dateObject.getHours() + ':' + dateObject.getMinutes()
    },
    nextPage () {
      // фичуем тута store.dispatch('tags/fetchTags', params.id), // page...
      this.pageRender(++this.pageNumber)
    },
    pageRender (pageNumber) {
      const startMaterials = pageNumber * 3 * this.sizeMaterial
      const endMaterials = startMaterials + this.sizeMaterial

      const startVideos = pageNumber * this.sizeVideos
      const endVideos = startVideos + this.sizeVideos

      const startPhotos = pageNumber * this.sizePhotos
      const endPhotos = startPhotos + this.sizePhotos
      this.pageItems.push({
        template: 'materials',
        items: this.materials.slice(startMaterials, endMaterials)
      })
      this.pageItems.push({
        template: 'videos',
        items: this.videos.slice(startVideos, endVideos)
      })
      this.pageItems.push({
        template: 'materials',
        items: this.materials.slice(startMaterials + 2, endMaterials + 2)
      })
      this.pageItems.push({
        template: 'phoros',
        items: this.photos.slice(startPhotos, endPhotos)
      })
      this.pageItems.push({
        template: 'materials',
        items: this.materials.slice(startMaterials + 4, endMaterials + 4)
      })
      // this.pageItems.push([
      //   ...this.materials.slice(startMaterials, endMaterials),
      //   ...this.video.slice(startVideos, endVideos),
      //   ...this.materials.slice(startMaterials + 2, endMaterials + 2),
      //   ...this.photo.slice(startPhotos, endPhotos),
      //   ...this.materials.slice(startMaterials + 4, endMaterials + 4)
      // ])
    }
  }
}
</script>

<style lang="scss">
@import "/assets/style/utils/vars";
@import "/assets/style/utils/mixins";

@import "/assets/modules/tags/tags-header";

.tags-content__box {
  display: block;
  position: relative;
  .tabs-content {
    display: block;
    position: relative;
    .hidden {
      display: none;
    }
    .tag-materials {
      .tag-materials-item {
        display: block;
        padding: 20px 0px;
        &:hover {
          .tag-materials-item__title {
            color: $mainHover;
          }
        }
        .tag-materials-item__date {
          font-size: 11px;
          color: $dateItem;
        }
        .tag-materials-item__title {
          font-size: 16px;
          font-weight: 600;
          color: #000;
        }
        .tag-materials-item__text {
          color: $textItem;
          font-family: "Noto Serif";
          font-size: 13px;
          line-height: 18px;
        }
      }
    }
  }
  .tag-populations {
    .population-header {
      .population-header__box {
        display: flex;
        .population-header__icon {
          @include size(20px);
        }
        .population-header__title {
          margin-left: 5px;
          font-size: 14px;
          color: $mainSection;
          white-space: nowrap;
          font-weight: 600;
        }
      }
    }
    .population-materials__box {
      padding: 10px 0px;
      .population-material {
        background: #f6f6f6;
        margin-top: 10px;
        display: block;
        &:first-child {
          margin-top: 0px;
        }
        &:hover {
          .population-material__box {
            .population-material__text__box {
              .tag-materials-item__title {
                color: $mainHover;
              }
            }
          }
        }
        .population-material__box {
          display: grid;
          grid-template-columns: minmax(50px, 185px) 1fr;
          align-items: center;
          @media screen and (max-width: $phoneWidth) {
            grid-template-columns: repeat(1, 1fr);
            .population-material__image__box {
              padding: 0px 20px;
            }
          }
          .population-material__text__box {
            padding: 5px 20px;
            .tag-materials-item__data {
              font-size: 11px;
              color: #525252;
            }
            .tag-materials-item__title {
              font-size: 16px;
              font-weight: 600;
              color: #000;
            }
            .tag-materials-item__text {
              padding-top: 5px;
              font-size: 12px;
              color: $textItem;
            }
          }
          .population-material__image__box {
            .population-material__image {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .tag-query {
    width: 100%;
    overflow: hidden;
    .tag-query-header {
      .tag-query-header__box {
        display: flex;
        .tag-query-header__title {
          font-size: 14px;
          color: $mainSection;
          white-space: nowrap;
          font-weight: 600;
        }
      }
    }
    .tag-query__box {
      padding: 5px 0px;
      display: flex;
      flex-wrap: wrap;
      margin: -6px -6px;
      .tag-query-item {
        margin: 6px;
        .tag-query-item__box {
          border: 1px solid $mainSection;
          .tag-query-item__text {
            padding: 5px 30px;
            font-size: 14px;
            color: #4d2466;
          }
        }
      }
    }
  }
  .tag-videos {
    .tag-video-header {
      .tag-video-header__box {
        display: flex;
        .tag-video-header__icon__box {
          background: #4d2466;
          @include size(20px);
          .tag-video-header__icon {
            @include size(20px);
          }
        }

        .tag-video-header__title {
          padding-left: 5px;
          font-size: 14px;
          color: $mainSection;
          white-space: nowrap;
          font-weight: 600;
        }
      }
    }
    .tag-video__box {
      padding: 5px 0px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
      @media screen and (max-width: $tableWidth) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: $smPhoneWidth) {
        grid-template-columns: repeat(1, 1fr);
      }

      .tag-video-item {
        background: #f6f6f6;
        &:hover {
          .tag-video-item__box {
            .tag-video-item__text__box {
              .tag-video-item__text-title {
                color: $mainHover;
              }
            }
            .tag-video-item__image__box {
              .tag-video-item__play__box {
                background: rgba(76, 36, 101, 0.9);
              }
            }
          }
        }
        .tag-video-item__box {
          display: flex;
          flex-direction: column;
          .tag-video-item__image__box {
            display: flex;
            position: relative;
            justify-content: center;
            .tag-video-item__time__box {
              position: absolute;
              top: 0px;
              left: 0px;
              display: flex;
              background: #4d2466;
              height: 20px;
              align-items: center;
              .tag-video-item__time-value {
                padding: 0px 5px;
                font-size: 12px;
                color: #ffffff;
              }
              .tag-video-item__time-icon__box {
                display: flex;
                .tag-video-item__time-icon {
                  @include size(20px);
                }
              }
            }
            .tag-video-item__play__box {
              position: absolute;
              top: calc(50% - 18px);
              left: calc(50% - 18px);
              background: rgba(76, 36, 101, 0.5);
              @include size(40px, 40px);
              @include transition-all;
              .tag-video-item__play {
                @include size(40px, 40px);
              }
            }
            .tag-video-item__image {
              width: 100%;
              min-height: 100px;
            }
          }
          .tag-video-item__text__box {
            padding: 10px 0px;
            .tag-video-item__text-date {
              font-size: 11px;
              color: $dateItem;
            }
            .tag-video-item__text-title {
              font-size: 14px;
              font-weight: 600;
              color: #000;
            }
          }
        }
      }
    }
  }
  .tag-section__line {
    margin-left: 5px;
    width: 100%;
    border-bottom: 1px solid $mainSection;
    height: 15px;
  }
}
</style>
