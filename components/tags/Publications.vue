<template>
  <div class="tags-content__box">
    <tagTitle
      :tag="mainTag"
    />
    <tabMenu
      :active="1"
    />
    <div class="tabs-content">
      <tagMaterials
        :items="materials"
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

import tagTitle from '@/components/tags/Title'
import tabMenu from '@/components/tags/TabMenu'
import tagMaterials from '@/components/tags/module/MaterialsList'
import nextBtn from '@/components/NextBtn'

export default {
  components: {
    tabMenu,
    tagTitle,
    tagMaterials,
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
      materials: 'materials'
    }),
    pageCount () {
      const l = this.materials.length
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
            limit: this.paramPage.limit,
            offset: page * this.paramPage.limit
          },
          config: false
        }
      })
      const res = await this.$store.dispatch('tags/addTags', this.$route.params.id + '?json=' + param)
      res.then(() => {
        // this.pageRender(page)
      })
    }
  }
}
</script>

<style lang="scss">
</style>
