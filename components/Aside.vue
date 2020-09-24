<template>
  <aside class="aside">
    <div class="aside__box">
      <div class="aside-video__box">
        <img src="@/assets/img/video.webp" alt="iz aside video" class="aside__image">
      </div>
      <div class="aside-widget__box">
        <div class="aside-widget__box-fix">
          <div id="adfox" />
          <div id="adfox1" />
          <div id="adfox2" />
          <div id="adfox_151870577374515411" />
          <!-- <div class="aside-widget__widget-image">
            <div class="widget-1" />
          </div>
          <div class="aside-widget__widget-second">
            <div class="widget-2" />
          </div> -->
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import positionScroll from '@/mixins/scroll'
import extid from '@/mixins/extid'
import { removeFixedElementOnTop, fixedElementOnTop, offset, standByPosition, fixedElementOnBottom } from '@/plugins/CustomFunction'

export default {
  mixins: [positionScroll, extid],
  data: () => ({
    lastScrollTop: 0,
    fixedWidgetBot: false,
    fixedWidgetTop: false
  }),
  computed: {
    ...mapState('slider', {
      defaultTop: 'defaultTop',
      targetScroll: 'targetScroll',
      pdFix: 'pdFix',
      pdBot: 'pdBot',
      active: 'active'
    })
  },
  watch: {
    active () {
      if (this.active) {
        this.initScroll()
      } else {
        this.destroyedScroll()
      }
      return this.active
    }
  },
  mounted () {
    this.advertisingInit()
    setTimeout(() => {
      if (document.querySelector('.section').offsetHeight - this.pdFix >= document.querySelector('.aside__box').offsetHeight) {
        this.setActive(true)
      }
    }, 1000)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    initScroll () {
      console.log('init Events SCROLL')
      this.setTargetScoll(document.querySelector('.aside-widget__box-fix'))
      this.setDefTop(offset(this.targetScroll).top - (this.pdFix * 2))
      window.addEventListener('resize', this.handleResize)
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyedScroll () {
      console.log('remove Events SCROLL')
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleResize)
    },
    async setAdfox (id) {
      return await window.Ya.adfoxCode.create({
        ownerId: 208087,
        containerId: id,
        params: {
          pt: 'b',
          p1: 'bsoji'
        }
      })
    },
    advertisingInit () {
      this.setAdfox('adfox')
      this.setAdfox('adfox1')
      this.setAdfox('adfox2')
    },
    handleResize () {
      this.setTargetScoll(document.querySelector('.aside-widget__box-fix'))
      this.setDefTop(offset(this.targetScroll).top - (this.pdFix * 2))
    },
    handleScroll () {
      const target = this.targetScroll
      const scrollTop = this.positionScroll.y
      const offsetFix = offset(target).top
      const clientHeight = document.documentElement.clientHeight
      const scrollBottom = scrollTop + clientHeight
      if (this.lastScrollTop > scrollTop) {
        // UP
        if (target.style.position === 'fixed') {
          if (this.fixedWidgetTop) {
            const position = offsetFix - this.defaultTop - (this.pdFix * 2)
            standByPosition(target, position)
            this.fixedWidgetTop = false
          }
          if (scrollTop <= this.defaultTop + this.pdFix) {
            removeFixedElementOnTop(target)
          }
        } else if (offsetFix > this.defaultTop) {
          if (scrollTop >= this.defaultTop + this.pdFix && offsetFix >= scrollTop + this.pdFix) {
            fixedElementOnTop(target, this.pdFix)
            target.style['margin-top'] = ''
            this.fixedWidgetBot = true
          }
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (target.offsetHeight + this.pdFix > clientHeight) {
          // DOWN
          if (target.style.position === 'fixed') {
            if (this.fixedWidgetBot) {
              const position = offsetFix - this.defaultTop - (this.pdFix * 2)
              standByPosition(target, position)
              this.fixedWidgetBot = false
            }
          } else {
            const targetBottom = target.offsetHeight + offsetFix
            if (targetBottom <= scrollBottom - this.pdBot) {
              fixedElementOnBottom(target, this.pdBot)
              target.style['margin-top'] = ''
              this.fixedWidgetTop = true
            }
          }
        } else if (offsetFix <= scrollTop + this.pdFix) {
          fixedElementOnTop(this.targetScroll, this.pdFix)
        }
      }
      this.lastScrollTop = scrollTop
    },
    ...mapMutations('slider', {
      setTargetScoll: 'SET_TARGET_SCROLL',
      setDefTop: 'SET_DEFAULT_TOP',
      setActive: 'SET_ACTIVE'
    })
  }
}
</script>

<style lang="scss">
@import "/assets/style/utils/vars";
@import "/assets/style/utils/mixins";

.aside {
  position: relative;
  .aside__box {
    margin: 15px 0px;
    .aside-widget__box {
      position: relative;
      .aside-widget__box-fix {
        overflow: hidden;
        width: 310px;
        & > div{
          padding-top: 15px;
        }
      }
    }
  }
  @media screen and (max-width: $smDesktopWidth) {
    visibility: hidden;
    height: 0;
    position: absolute;
  }
}
</style>
