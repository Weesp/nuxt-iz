<template>
  <div class="tags-content__box">
    <tagTitle
      :tag="mainTag"
    />
    <tabMenu
      :active="2"
    />
    <div class="tabs-content">
      <tagPhotos
        :items="photos"
        :title="false"
      />
      <div class="btn-show-more__box">
        <button
          v-if="pageNumber * paramPage.limit < pageCount"
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
import tagPhotos from '@/components/tags/module/Photos'

export default {
  components: {
    tabMenu,
    tagTitle,
    tagPhotos
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
      photos: 'photos'
    }),
    pageCount () {
      const l = this.photos.length
      const s = this.paramPage.limit
      return Math.ceil(l / s)
    }
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
      console.log(param)
      const res = await this.$store.dispatch('tags/addTags', this.$route.params.id + '?json=' + param)
      res.then(() => {
        console.log(1111)
        // this.pageRender(page)
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
