<template>
  <div class="tags-content__box">
    <tagTitle
      :tag="mainTag"
    />
    <tabMenu
      :active="0"
    />
    <div class="tabs-content">
      <div v-for="(page, index) in paginatedData" :key="index">
        <tagMaterials
          v-if="page.template === 'materials'"
          :items="page.items"
        />
        <tagVideos
          v-if="page.template === 'videos' && page.items.length"
          :items="page.items"
        />
        <tagPhotos
          v-if="page.template === 'photos' && page.items.length"
          :items="page.items"
        />
      </div>
      <!-- <div class="tag-populations tag-materials">
        <div class="population-header">
          <div class="population-header__box">
            <img src="@/assets/img/tags/icon-longread.svg" alt="Популярные материалы" class="population-header__icon">
          </div>
          <div class="population-header__title">
            Популярные материалы
          </div>
          <div class="tag-section__line" />
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
      </div> -->
      <nextBtn
        v-if="pageNumber * 3 < pageCount -3"
        ref="nextBtn"
        @nextPage="nextPage"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import tagTitle from '@/components/tags/Title'
import tabMenu from '@/components/tags/TabMenu'
import tagMaterials from '@/components/tags/module/MaterialsList'
import tagVideos from '@/components/tags/module/VideosList'
import tagPhotos from '@/components/tags/module/PhotosList'
import nextBtn from '@/components/NextBtn'

export default {
  components: {
    tabMenu,
    tagTitle,
    tagMaterials,
    tagVideos,
    tagPhotos,
    nextBtn
  },
  data: () => ({
    pageItems: [],
    pageNumber: 0,
    sizeMaterial: 2,
    sizeVideos: 4,
    sizePhotos: 4
  }),
  computed: {
    ...mapState('tags', {
      mainTag: 'main',
      videos: 'videos',
      photos: 'photos',
      materials: 'materials'
    }),
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
    async nextPage ({ params }) {
      // console.log(this.$route)
      // фичуем тута store.dispatch('tags/fetchTags', params.id), // page...
      const page = ++this.pageNumber
      const param = JSON.stringify({
        include: {
          materials: {
            limit: this.sizeMaterial * 4,
            offset: page * this.sizeMaterial * 4
          },
          videos: {
            limit: this.sizeVideos,
            offset: page * this.sizeVideos
          },
          photos: {
            limit: this.sizePhotos,
            offset: page * this.sizePhotos
          },
          config: false
        }
      })
      const res = await this.$store.dispatch('tags/addTags', this.$route.params.id + '?json=' + param)
      res.then(() => {
        this.pageRender(page)
      })
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
        template: 'photos',
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
      margin: 10px 0px;
    }
  }
  .tag-populations {
    .population-header {
      display: flex;
      .population-header__box {
        margin-right: 5px;
        @include size(20px);
        .population-header__icon {
          @include size(20px);
          max-width: none;
        }
      }
      .population-header__title {
        font-size: 14px;
        color: $mainSection;
        white-space: nowrap;
        font-weight: 400;
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
          font-weight: 400;
        }
      }
    }
    .tag-query__box {
      padding: 6px 0px;
      display: flex;
      flex-wrap: wrap;
      margin: 0 -6px;
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
  .tag-section__line {
    margin-left: 5px;
    width: 100%;
    border-bottom: 1px solid $mainSection;
    height: 15px;
  }
}
</style>
