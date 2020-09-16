/* eslint-disable no-console */
import menuDefault from '@/assets/params/ConfigDefault/MainMenu'

export const state = () => ({
  all: [],
  topPanel: [],
  mainMenu: menuDefault,
  ticker: []
})

// export const getters = {
//   getTopPanel: (state) => {
//     return state.topPanel
//   },
//   getMainMenu: (state) => {
//     return state.mainMenu
//   },
//   getTicker: (state) => {
//     return state.ticker
//   }
// }

export const mutations = {
  SET_TOP_PANEL (state, value) {
    state.topPanel = value
  },
  SET_MAIN_MENU (state, value) {
    state.mainMenu = value
  },
  SET_TICKER (state, value) {
    state.ticker = value
  }
}

export const actions = {
  async getTagsApi ({ commit }, tag) {
    if (!tag) { return false }
    let ip, topPanel, mainMenu, ticker, result
    try {
      ip = await this.$axios.$get(`https://iz.ru/api/0/tag/${tag}`)
      result = ip.status.code === 200
    } catch (error) {
      result = false
      console.warn(error)
    }
    try {
      topPanel = ip.included.topPanel.objects
      commit('SET_TOP_PANEL', topPanel)
    } catch (error) {
      console.warn(error)
    }
    try {
      mainMenu = ip.included.menu.objects
      commit('SET_MAIN_MENU', mainMenu)
    } catch (error) {
      console.warn(error)
    }
    try {
      ticker = ip.included.ticker.objects
      commit('SET_TICKER', ticker)
    } catch (error) {
      console.warn(error)
    }
    return result
  }
}
