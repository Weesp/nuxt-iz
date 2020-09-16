<template>
  <div class="live-player__box">
    <input id="livePlayerSwitcher" type="checkbox" class="menu-switcher">
    <div class="live-player">
      <label for="livePlayerSwitcher" class="live-player__btn">
        <div class="live-player__btn-text">Прямой эфир</div>
      </label>
      <div class="live-player__video__box">
        <div class="live-player__video">
          <img src="@/assets/img/video.webp" alt="iz aside video" class="aside__image">
        </div>
        <label for="livePlayerSwitcher" class="live-player__closer">x</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "/assets/style/utils/vars";
@import "/assets/style/utils/mixins";

.live-player__box {
  .live-player {
    position: fixed;
    right: 0px;
    bottom: 30px;
    opacity: 0;
    visibility: hidden;
    z-index: 1000;
    @include transition-all;
    &.active {
      opacity: 1;
      visibility: visible;
      right: 20px;
      bottom: 50px;
    }
    .live-player__btn {
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.35);
      display: block;
      border-radius: 4px;
      padding: 4px 10px;
      cursor: pointer;
      background: linear-gradient(to top, #6f071e, #cf1a43);
      &:hover {
        background: $mainHover;
      }
      .live-player__btn-text {
        font-size: 14px;
        color: #fff;
        text-transform: uppercase;
      }
    }
    .live-player__video__box {
      display: none;
    }
    .live-player__closer {
      display: block;
      position: absolute;
      right: 0px;
      top: -24px;
      width: 26px;
      height: 24px;
      text-align: center;
      cursor: pointer;
      border: 1px solid #cbcbcb;
      border-bottom: none;
      box-sizing: border-box;
      background: #fff;
      @include transition-all;
    }
  }
  @media screen and (max-width: $tableWidth) {
    margin-bottom: 20px;
    .live-player {
      opacity: 1;
      visibility: visible;
      position: relative;
      right: 0px;
      bottom: 0px;
      &.active {
        position: fixed;
        right: 20px;
        bottom: 20px;
        .live-player__btn {
          border-radius: 4px;
          padding: 4px 10px;
        }
      }
      .live-player__video__box {
        right: 0px;
        bottom: 0px;
        @include size(160px, 90px);
      }
      .live-player__btn {
        box-shadow: inherit;
        padding: 10px;
        text-align: center;
        border-radius: 0px;
      }
    }
  }
}
#livePlayerSwitcher:checked ~ .live-player {
  bottom: 50px;
  .live-player__btn {
    display: none;
  }
  .live-player__video__box {
    display: block;
  }
  @media screen and (max-width: $tableWidth) {
    right: 0px;
    bottom: 0px;
    &.active {
      right: 20px;
      bottom: 20px;
      .live-player__video__box {
        margin-top: 0px;
        @include size(160px, 90px);
      }
    }
    .live-player__video__box {
      margin-top: 20px;
      height: inherit;
      width: 100%;
      .aside__image {
        width: 100%;
      }
    }
  }
}

</style>
