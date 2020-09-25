<template>
  <div class="btn-show-more__box">
    <button
      ref="nextBtn"
      class="btn-show-more"
      @click="nextPage"
    >
      Показать ещё
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  // middleware: ['navigation'],
  methods: {
    btnLoaded (btn = this.$refs.nextBtn) {
      if (btn) {
        btn.classList.add('loading')
        btn.disabled = true
        btn.style['background-color'] = '#5C5C5C'
        btn.style.cursor = 'default'
      }
    },
    btnFinish (btn = this.$refs.nextBtn) {
      if (btn) {
        btn.classList.remove('loading')
        btn.disabled = false
        btn.style['background-color'] = '#452963'
        btn.style.cursor = 'pointer'
      }
    },
    nextPage () {
      this.$emit('nextPage')
    }
  }
}

</script>

<style lang="scss">
@import "/assets/style/utils/vars";
@import "/assets/style/utils/mixins";

.btn-show-more__box {
  text-align: center;
  .btn-show-more {
    min-width: 354px;
    margin: 30px 0 10px;
    padding: 20px;
    text-align: center;
    background-color: $secondColor;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 1px;
    position: relative;
    font-weight: 500;
    color: #ffffff;
    pointer-events: auto;
    cursor: pointer;
    @include transition-all;
    &.disabled {
      background-color: $urlDefault;
    }
    &.loading{
      color: transparent!important;
      &::before{
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        margin: -.64285714em 0 0 -.64285714em;
        width: 1.28571429em;
        height: 1.28571429em;
        border-radius: 500rem;
        border: .2em solid rgba(0,0,0,.15);
      }
      &::after{
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        margin: -.64285714em 0 0 -.64285714em;
        width: 1.28571429em;
        height: 1.28571429em;
        animation: button-spin .6s linear;
        animation-iteration-count: infinite;
        border-radius: 500rem;
        border-color: #fff transparent transparent;
        border-style: solid;
        border-width: .2em;
        box-shadow: 0 0 0 1px transparent;
      }
    }
    @media screen and (max-width: $tableWidth) {
      font-size: 14px;
      padding: 15px;
    }
    @media screen and (max-width: $phoneWidth) {
      font-size: 12px;
      width: 100%;
      min-width: inherit;
    }
  }
}
@keyframes button-spin{
  from{
    transform:rotate(0)
  }
  to{
    transform:rotate(360deg)
  }
}

</style>
