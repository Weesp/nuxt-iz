export const state = () => ({
  defaultTop: 0,
  targetScroll: '',
  pdFix: 75,
  pdBot: 30,
  active: false
})

export const mutations = {
  SET_TARGET_SCROLL (state, value) {
    state.targetScroll = value
  },
  SET_DEFAULT_TOP (state, value) {
    state.defaultTop = value
  },
  SET_ACTIVE (state, value) {
    state.active = value
  }
}

export const actions = {
}
