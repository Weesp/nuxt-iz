<template>
  <div class="tag-tabs">
    <div class="tag-tabs__box">
      <div v-for="item in menuItems" :key="item.id" class="tag-tabs-item__box">
        <a :href="item.path + $route.params.id" :class="'tag-tabs-item' + (item.id === active ? ' active' : '')">
          <div class="tag-tabs-item__text">
            {{ item.title }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import paramsMenu from '@/assets/params/tags/tab-menu'
export default {
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    menuItems: paramsMenu
  })
}
</script>

<style lang="scss">
@import "/assets/style/utils/vars";
@import "/assets/style/utils/mixins";

.tag-tabs {
  .tag-tabs__box {
    margin: 20px 0px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    border-bottom: 1px solid #999999;
    .tag-tabs-item__box{
      width: 100%;
      .tag-tabs-item {
        padding: 5px 0px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        width: 100%;
        border-bottom: 2px solid #ffffff;
        @include transition-all;
        .tag-tabs-item__text {
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          color: #999999;
        }
        &.active {
          border-bottom: 2px solid $mainSection;
          .tag-tabs-item__text {
            font-weight: 600;
            color: #000000;
          }
        }
        &:hover {
          .tag-tabs-item__text{
            color: #000000;
          }
        }
      }
    }
    @media screen and (max-width: $phoneWidth) {
      grid-template-columns: repeat(2, 1fr);
      border-bottom: 0px;
    }
    @media screen and (max-width: $smPhoneWidth) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
