<template>
  <div class="tag-title">
    <div v-if="tag && tag.id" class="tag-title__box">
      <div v-if="tag.previews && tag.previews['900x506']" class="tag-title-image__box">
        <img
          class="tag-title-image"
          :src="tag.previews['900x506'].path"
          :alt="'Все новости с тегом ' + tag.title"
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
          <div class="tag-title-content__title">
            {{ tag.title }}
          </div>
          <div v-if="tag.description" class="tag-title-content__text" v-html="tag.description" />
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

<style>

</style>
