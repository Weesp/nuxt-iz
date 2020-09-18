export default {
  data () {
    return {
      positionScroll: {
        x: 0,
        y: 0
      }
    }
  },
  created () {
    if (!this.$isServer) {
      this._scrollListener = () => {
        this.positionScroll = {
          x: Math.round(window.pageXOffset),
          y: Math.round(window.pageYOffset)
        }
      }

      this._scrollListener()

      window.addEventListener('scroll', this._scrollListener)
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this._scrollListener)
  }
}
