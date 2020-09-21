<template>
  <div class="tag-materials">
    <div class="tag-materials__box">
      <div class="tag-materials-item__box">
        <a
          v-for="(item, indx) in items"
          :key="indx"
          :href="(item.path ? item.path : '/')"
          class="tag-materials-item"
        >
          <div
            class="tag-materials-item__date"
          >{{ item.date.published ? localeDate(item.date.published) : item.date }}</div>
          <div class="tag-materials-item__title">{{ item.title }}</div>
          <div class="tag-materials-item__text">{{ item.description }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { localeDate } from '@/plugins/CustomFunction'

export default {
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    localeDate
  }
}
</script>

<style lang="scss">
@import "/assets/style/utils/vars";

.tag-materials-item {
  display: block;
  padding: 6px 0px;
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
</style>
