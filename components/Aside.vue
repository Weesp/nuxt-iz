<template>
  <aside class="aside">
    <div class="aside__box">
      <div class="aside-video__box">
        <img src="@/assets/img/video.webp" alt="iz aside video" class="aside__image">
      </div>
      <div class="aside-widget__box">
        <div class="aside-widget__box-fix">
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
import positionScroll from '@/mixins/scroll'
import extid from '@/mixins/extid'
import { removeFixedElementOnTop, fixedElementOnTop, offset, standByPosition, fixedElementOnBottom } from '@/plugins/CustomFunction'

export default {
  mixins: [positionScroll, extid],
  data: () => ({
    defaultTop: 0,
    lastScrollTop: 0,
    targetScroll: '',
    pdFix: 75, // динамичным сделат, вдруг меню изме // отступ от уже фиксированных элементов // скорее передавать из хедер
    pdBot: 30,
    fixedWidgetBot: false,
    fixedWidgetTop: false
  }),
  mounted () {
    if (document.querySelector('.section').offsetHeight - this.pdFix >= document.querySelector('.aside__box').offsetHeight) {
      this.targetScroll = document.querySelector('.aside-widget__box-fix')
      this.defaultTop = offset(this.targetScroll).top - (this.pdFix * 2)
      window.addEventListener('resize', this.handleResize)
      window.addEventListener('scroll', this.handleScroll)
    }
    const extid = this.getUserExtid() // mixin extid
    if (window?.Ya?.adfoxCode) {
      console.log(1111)
      window.Ya.adfoxCode.createScroll({
        ownerId: 264443,
        containerId: 'adfox_151870577374515411',
        params: {
          extid_tag: 'izvestia',
          extid,
          p1: 'bzirr',
          p2: 'fulg',
          puid8: '',
          puid12: '186114',
          puid21: '',
          puid26: 0
        }
      }, ['desktop', 'tablet'], {
        tabletWidth: 1023,
        phoneWidth: 480,
        isAutoReloads: false
      })
    }
    // this.handleScroll()
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleResize () {
      this.targetScroll = document.querySelector('.aside-widget__box-fix')
      this.defaultTop = offset(this.targetScroll).top - (this.pdFix * 2)
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
    }
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
    .aside__image {
    }
    .aside-widget__box {
      .aside-widget__box-fix {
        // position: absolute;
        width: 310px;
      }
      .aside-widget__widget-image {
        padding-top: 15px;
      }
      .aside-widget__widget-second {
        padding: 15px 0px;
      }
      .widget-1 {
        height: 350px;
        background: $izColor;
      }
      .widget-2 {
        height: 500px;
        background: $textItem;
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
