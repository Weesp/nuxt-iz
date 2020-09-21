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
      <div class="btn-show-more__box">
        <button
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
// import { timeFormat, localeDate } from '@/plugins/CustomFunction'

import tagTitle from '@/components/tags/Title'
import tabMenu from '@/components/tags/TabMenu'
import tagVideos from '@/components/tags/module/Videos'

export default {
  components: {
    tabMenu,
    tagTitle,
    tagVideos
  },
  data: () => ({
    pageNumber: 0
  }),
  computed: {
    ...mapState('tags', {
      mainTag: 'main',
      videos: 'videos'
    })
  },
  methods: {
    async nextPage ({ params }) {
      // console.log(this.$route)
      // фичуем тута store.dispatch('tags/fetchTags', params.id), // page...
      const page = ++this.pageNumber
      const param = JSON.stringify({
        include: {
          materials: {
            limit: 8,
            offset: page * 8
          },
          videos: {
            limit: 4,
            offset: page * 4
          },
          photos: {
            limit: 4,
            offset: page * 4
          },
          config: false
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
@import "/assets/style/utils/vars";
@import "/assets/style/utils/mixins";

@import "/assets/modules/tags/tags-header";

</style>
