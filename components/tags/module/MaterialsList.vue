<template>
  <div class="tag-materials">
    <div class="tag-materials__box">
      <div class="tag-materials-item__box">
        <div
          v-for="(item, indx) in items"
          :key="indx"
          class="tag-materials-item__box"
          itemscope
          itemtype="https://schema.org/NewsArticle"
        >
          <a
            :href="(item.path ? item.path : '/')"
            itemprop="url"
            class="tag-materials-item"
          >
            <div
              class="tag-materials-item__date"
            >
              <meta itemprop="datePublished" :content="dateISO(item.date.published)">
              {{ item.date.published ? localeDate(item.date.published) : item.date }}
            </div>
            <div class="tag-materials-item__title" itemprop="name">{{ item.title }}</div>
            <div class="tag-materials-item__text" itemprop="description">{{ item.description }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { localeDate, dateISO } from '@/plugins/CustomFunction'

export default {
  props: {
    items: {
      type: Array,
      default: () => ([])
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

.tag-materials-item__box{
  padding: 10px 0px;
  .tag-materials-item {
    display: block;
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
      padding: 4px 0;
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
</style>
