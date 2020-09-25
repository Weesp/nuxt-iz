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
      <nextBtn
        v-if="pageNumber * paramPage.limit < pageCount"
        ref="nextBtn"
        @nextPage="nextPage"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// import { offset } from '@/plugins/CustomFunction'

import tagTitle from '@/components/tags/Title'
import tabMenu from '@/components/tags/TabMenu'
import tagPhotos from '@/components/tags/module/PhotosList'
import nextBtn from '@/components/NextBtn'

export default {
  components: {
    tabMenu,
    tagTitle,
    tagPhotos,
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
      photos: 'photos'
    }),
    ...mapState('slider', {
      pdFix: 'pdFix'
    }),
    pageCount () {
      const l = this.photos.length
      const s = this.paramPage.limit
      return Math.ceil(l / s)
    }
  },
  methods: {
    nextPage () {
      // console.log(this.$route)
      // фичуем тута store.dispatch('tags/fetchTags', params.id), // page...
      this.$refs.nextBtn.btnLoaded()
      setTimeout(() => {
        const box = document.querySelector('.tag-photo__box')
        const clone = box.cloneNode(true)
        box.insertAdjacentElement('afterend', clone)
        this.$refs.nextBtn.btnFinish()
        if (document.querySelector('section.section').offsetHeight - this.pdFix >= document.querySelector('.aside__box').offsetHeight) {
          this.setActive(true)
        }
        // this.$store.commit('SET_DEFAULT_TOP', document.querySelector('.aside-widget__box-fix'))
      }, 2000)
      // const page = ++this.pageNumber
      // const param = JSON.stringify({
      //   include: {
      //     photos: {
      //       limit: this.paramPage.limit,
      //       offset: page * this.paramPage.limit
      //     },
      //     config: false
      //   }
      // })
      // // console.log(param)
      // const res = await this.$store.dispatch('tags/addTags', this.$route.params.id + '?json=' + param)
      // res.then(() => {
      //   console.log(1111)
      //   // this.pageRender(page)
      //   this.$nuxt.$loading.finish()
      // })
    },
    ...mapMutations('slider', {
      setActive: 'SET_ACTIVE'
    })
  }

}
</script>

<style lang="scss">
</style>
