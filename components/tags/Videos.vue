<template>
  <div class="tags-content__box">
    <tagTitle
      :tag="mainTag"
    />
    <tabMenu
      :active="3"
    />
    <div class="tabs-content">
      <tagVideos
        :items="videos"
        :title="false"
      />
      <nextBtn
        v-if="pageNumber * paramPage.limit < pageCount"
        ref="nextBtn"
        @nextPage="nextPage"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { timeFormat, localeDate } from '@/plugins/CustomFunction'

import tagTitle from '@/components/tags/Title'
import tabMenu from '@/components/tags/TabMenu'
import tagVideos from '@/components/tags/module/VideosList'

import nextBtn from '@/components/NextBtn'

export default {
  components: {
    tabMenu,
    tagTitle,
    tagVideos,
    nextBtn
  },
  props: {
    paramPage: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    pageNumber: 0
  }),
  computed: {
    ...mapState('tags', {
      mainTag: 'main',
      videos: 'videos'
    }),
    pageCount () {
      const l = this.videos.length
      const s = this.paramPage.limit
      return Math.ceil(l / s)
    }
  },
  methods: {
    async nextPage () {
      // console.log(this.$route)
      // фичуем тута store.dispatch('tags/fetchTags', params.id), // page...
      const page = ++this.pageNumber
      const param = JSON.stringify({
        include: {
          videos: {
            limit: this.paramPage.limit,
            offset: page * this.paramPage.limit
          }
        }
      })
      const res = await this.$store.dispatch('tags/addTags', this.$route.params.id + '?json=' + param)
      res.then(() => {
        console.log(1111)
      })
    }
  }
}
</script>

<style lang="scss">
</style>
