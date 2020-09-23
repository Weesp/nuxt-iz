<template>
  <div class="tag-title" itemprop="mainEntity" itemscope itemtype="https://schema.org/NewsArticle">
    <div v-if="tag && tag.id" class="tag-title__box">
      <div v-if="tag.previews && tag.previews['900x506']" class="tag-title-image__box">
        <img
          class="tag-title-image"
          :src="tag.previews['900x506'].path"
          :alt="'Все новости с тегом ' + tag.title"
          itemprop="image"
        >
      </div>
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
        <div v-if="tag.title" class="tag-title-content__box">
          <div class="tag-title-content__label">
            Все новости с тегом
          </div>
          <div class="tag-title-content__title" itemprop="headline">
            {{ tag.title }}
          </div>
          <div v-if="tag.description" class="tag-title-content__text" itemprop="description" v-html="tag.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import 'lazysizes'

export default {
  props: {
    tag: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
@import "/assets/style/utils/vars";
@import "/assets/style/utils/mixins";
.tag-title {
  .tag-title__box {
    display: grid;
    grid-template-columns: minmax(0, 220px) 2fr;
    position: relative;
    align-items: center;
    @media screen and (max-width: $tableWidth) {
      grid-template-columns: 1fr;
    }
  }
  .tag-title-image__box{
    max-width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .tag-title-image {
      position: absolute;
      height: 100%;
      z-index: 2;
      top: 0px;
      max-width: none;
      left: -25%;
      @media screen and (max-width: $tableWidth) {
        display: none;
      }
    }
  }
  .tag-title__background {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    max-width: 970px;
    height: 100%;
    .background-mask {
      overflow: hidden;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
    }
    .background-img {
      position: absolute;
      right: 0px;
      min-height: 100%;
      max-width: none;
    }
  }
  .tag-title-content {
    z-index: 2;
    position: relative;
    .tag-title-content__box {
      padding: 20px;
      color: #ffffff;
      .tag-title-content__label {
        font-size: 14px;
      }
      .tag-title-content__title {
        font-size: 32px;
        font-weight: bold;
      }
      .tag-title-content__text {
        padding-top: 20px;
        font-size: 16px;
        line-height: 21px;
      }
    }
  }
}

</style>
