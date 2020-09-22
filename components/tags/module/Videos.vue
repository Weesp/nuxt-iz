<template>
  <div class="tag-videos tag-materials">
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
    <div class="tag-video__box">
      <div v-for="item in items" :key="item.id" class="tag-video-item__container">
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
                <div
                  v-if="item.duration"
                  class="tag-video-item__time-value"
                >{{ timeFormat(+item.duration) }}</div>
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
              <div class="tag-video-item__text-date">{{ localeDate(item.date.published) }}</div>
              <div class="tag-video-item__text-title">{{ item.title }}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { timeFormat, localeDate } from '@/plugins/CustomFunction'

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
    timeFormat,
    localeDate
  }
}
</script>

<style lang="scss">
@import "/assets/style/utils/vars";
@import "/assets/style/utils/mixins";

.tag-videos {
  .tag-video-header {
    .tag-video-header__box {
      display: flex;
      .tag-video-header__icon__box {
        background: #4d2466;
        margin-right: 5px;
        @include size(20px);
        .tag-video-header__icon {
          @include size(20px);
        }
      }

      .tag-video-header__title {
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
  .tag-video__box {
    display: grid;
    grid-template-columns: repeat(4, calc(100%/4 - 10px*3/4));
    grid-gap: 10px;
    margin: 12px 0;
    .tag-video-item__container{
      background: #f6f6f6;
      .tag-video-item {
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
            padding: 13px 10px;
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
    @media screen and (max-width: $tableWidth) {
      grid-template-columns: repeat(2, calc(100%/2 - 10px/2));
    }
    @media screen and (max-width: $smPhoneWidth) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
