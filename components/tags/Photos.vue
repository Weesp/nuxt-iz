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
  },
  head () {
    return {
      title: this.mainTag.title ? 'Все фото с тегом ' + this.mainTag.title : '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.mainTag.description || 'Все фото с тегом ' + this.mainTag.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.mainTag.description || 'Все фото с тегом ' + this.mainTag.title
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.mainTag.description || 'Все фото с тегом ' + this.mainTag.title
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: this.$route.fullPath
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org/',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@id': 'https://iz.ru',
                  name: 'iz.ru'
                }
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@id': 'https://iz.ru/tags',
                  name: 'Теги'
                }
              },
              {
                '@type': 'ListItem',
                position: 3,
                item: {
                  '@id': this.$route.fullPath,
                  name: 'Фото ' + this.mainTag.title
                }
              }
            ]
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
