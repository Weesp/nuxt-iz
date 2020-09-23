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
          ref="btnNext"
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
    nextPage ({ params }) {
      this.$nuxt.$loading.start()
      this.btnDisabled(this.$refs.btnNext)
      // console.log(this.$route)
      // фичуем тута store.dispatch('tags/fetchTags', params.id), // page...
      setTimeout(() => {
        this.btnActived(this.$refs.btnNext)
        this.$nuxt.$loading.finish()
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
    btnDisabled (btn) {
      this.$refs.btnNext.disabled = true
      this.$refs.btnNext.style['background-color'] = '#5C5C5C'
      this.$refs.btnNext.style.cursor = 'default'
    },
    btnActived (btn) {
      this.$refs.btnNext.disabled = false
      this.$refs.btnNext.style['background-color'] = '#452963'
      this.$refs.btnNext.style.cursor = 'pointer'
    }
  }

}
</script>

<style lang="scss">
@import "/assets/style/utils/vars";
@import "/assets/style/utils/mixins";

@import "/assets/modules/tags/tags-header";

</style>
