<template>
  <aside class="aside">
    <div class="aside__box">
      <div class="aside-video__box">
        <img src="@/assets/img/video.webp" alt="iz aside video" class="aside__image">
      </div>
      <div class="aside-widget__box">
        <div class="aside-widget__box-fix">
          <div class="aside-widget__widget-image">
            <div class="widget-1" />
          </div>
          <div class="aside-widget__widget-second">
            <div class="widget-2" />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "/assets/style/utils/vars";

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
    display: none;
  }
}
</style>
