<template>
  <div class="tag-photos tag-materials">
    <div v-if="title" class="tag-photo-header">
      <div class="tag-photo-header__box">
        <div class="tag-photo-header__icon__box">
          <svg class="tag-photo-header__icon">
            <use
              width="20"
              height="20"
              xlink:href="/sprite/sprite-svg.svg?v=1.3#index--SVG_icons_type_materials--icon_video"
              href="/sprite/sprite-svg.svg?v=1.3#index--SVG_icons_type_materials--icon_video"
            />
          </svg>
        </div>
        <div class="tag-photo-header__title">
          Фото
        </div>
        <div class="tag-section__line" />
      </div>
    </div>
    <div
      class="tag-photo__box"
    >
      <div
        v-for="item in items"
        :key="item.id"
        itemscope
        itemtype="http://schema.org/Thing"
        class="tag-photo-item__container"
      >
        <a
          v-if="item.path && item.title"
          :href="item.path"
          class="tag-photo-item"
          itemprop="url"
        >
          <div class="tag-photo-item__box">
            <div
              class="tag-photo-item__image__box"
              itemscope
              itemtype="http://schema.org/ImageObject"
            >
              <img
                v-if="item.previews && item.previews['900x506']"
                :data-src="item.previews['900x506'].path"
                :alt="item.title"
                itemprop="contentUrl"
                :content="item.previews['900x506'].path"
                class="tag-photo-item__image lazyload"
              >
            </div>
            <div class="tag-photo-item__text__box">
              <div class="tag-photo-item__text-date">
                <meta itemprop="datePublished" :content="dateISO(item.date.published)">
                {{ localeDate(item.date.published) }}
              </div>
              <div class="tag-photo-item__text-title" itemprop="name">
                {{ item.title }}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import 'lazysizes'
import { localeDate, dateISO } from '@/plugins/CustomFunction'

export default {
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    title: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    localeDate,
    dateISO
  }
}
</script>

<style lang="scss">
@import "/assets/style/utils/vars";
@import "/assets/style/utils/mixins";

.tag-photos {
  .tag-photo-header {
    .tag-photo-header__box {
      display: flex;
      .tag-photo-header__icon__box {
        background: #4d2466;
        margin-right: 5px;
        @include size(20px);
        .tag-photo-header__icon {
          @include size(20px);
        }
      }
      .tag-photo-header__title {
        font-size: 14px;
        color: $mainSection;
        white-space: nowrap;
        font-weight: 400;
      }
      .tag-section__line {
        margin-left: 5px;
        width: 100%;
        border-bottom: 1px solid $mainSection;
        height: 15px;
      }
    }
  }
  .tag-photo__box {
    margin: 12px 0px;
    display: grid;
    grid-template-columns: repeat(4, calc(100%/4 - 10px*3/4));
    grid-gap: 10px;
    .tag-photo-item__container{
      background: #f6f6f6;
      .tag-photo-item {
        &:hover {
          .tag-photo-item__box {
            .tag-photo-item__text__box {
              .tag-photo-item__text-title {
                color: $mainHover;
              }
            }
            .tag-photo-item__image__box {
              .tag-photo-item__play__box {
                background: rgba(76, 36, 101, 0.9);
              }
            }
          }
        }
        .tag-photo-item__box {
          display: flex;
          flex-direction: column;
          .tag-photo-item__image__box {
            display: flex;
            position: relative;
            justify-content: center;
            .tag-photo-item__time__box {
              position: absolute;
              top: 0px;
              left: 0px;
              display: flex;
              background: #4d2466;
              height: 20px;
              align-items: center;
              .tag-photo-item__time-value {
                padding: 0px 5px;
                font-size: 12px;
                color: #ffffff;
              }
              .tag-photo-item__time-icon__box {
                display: flex;
                .tag-photo-item__time-icon {
                  @include size(20px);
                }
              }
            }
            .tag-photo-item__play__box {
              position: absolute;
              top: calc(50% - 18px);
              left: calc(50% - 18px);
              background: rgba(76, 36, 101, 0.5);
              @include size(40px, 40px);
              @include transition-all;
              .tag-photo-item__play {
                @include size(40px, 40px);
              }
            }
            .tag-photo-item__image {
              width: 100%;
              min-height: 100px;
            }
          }
          .tag-photo-item__text__box {
            padding: 13px 10px;
            .tag-photo-item__text-date {
              font-size: 11px;
              color: $dateItem;
            }
            .tag-photo-item__text-title {
              overflow: hidden;
              word-wrap: break-word;
              font-size: 14px;
              font-weight: 600;
              color: #000;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
    @media screen and (max-width: $tableWidth) {
      grid-template-columns: repeat(2, calc(100%/2 - 10px/2));
    }
    @media screen and (max-width: $smPhoneWidth) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
