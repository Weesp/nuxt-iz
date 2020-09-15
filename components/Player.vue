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

<style>
</style>
